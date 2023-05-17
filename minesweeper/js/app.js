document.head.insertAdjacentHTML('beforeend','<link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR42mNgGArgP90N+I9Eo2OiDfyPBxOnGQbIMYRsA/6Tgck2iOwA/E+3WKA4HQxsUiYJAAAf1lyk4ulhiwAAAABJRU5ErkJggg==" type="image/x-icon">')

let sec = 0
const btnStart = document.createElement('button')
btnStart.classList.add('.btn-start')
btnStart.innerHTML = 'start game'
document.body.appendChild(btnStart)
document.querySelector('.btn-start')
document.addEventListener('click', startTimer)

const result = document.createElement('div')
result.classList.add('result')
document.body.appendChild(result)

const timer = document.createElement('div')
timer.classList.add('timer')
timer.innerHTML = `${sec/60} min ${sec%60} sec`
document.body.appendChild(timer)



function showTimer(seconds) {
  timer.innerHTML = `${Math.floor(seconds/60)} min ${seconds%60} sec`
}

function startTimer() {
  setInterval(() => {
    sec++;
    showTimer(sec);
  }, 1000)
}

const width = 10;
const minesAmount = 20;
let flags = 0;
let isGameOver = false

const flagsLine = document.createElement('div');
flagsLine.innerHTML = `Flags left: <span class='flags-amount'></span>`
document.body.appendChild(flagsLine)
const flagsAmount = document.querySelector('.flags-amount')

const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

const mineContent = document.createElement('div')
mineContent.classList.add('mine-content')
container.appendChild(mineContent)

const scoreBar = document.createElement('div');
scoreBar.classList.add('mine__score-bar')
mineContent.appendChild(scoreBar)

const mineContentInner = document.createElement('div')
mineContentInner.classList.add('mine-content__inner')
mineContent.appendChild(mineContentInner)

let squares = []

const minesArray = Array(minesAmount).fill('mine')
const emptyArray = Array(width*width - minesAmount).fill('empty')
const gameArray = emptyArray.concat(minesArray)
const shuffledArray = gameArray.sort(() => Math.random() - 0.5)

function createBoard() {
  flagsAmount.innerHTML = minesAmount;


}
createBoard()

for(let i = 0; i < width*width; i++) {
  const square = document.createElement('div')
  square.setAttribute('id', i)
  square.classList.add(`ceil`, `${shuffledArray[i]}`)
  mineContentInner.appendChild(square)
  squares.push(square)

  square.addEventListener('click', function (e) {
    click(square)
  })
  //left click
  square.oncontextmenu = function(e) {
    e.preventDefault()
    addFlag(square)
  }
}

for (let i = 0; i < squares.length; i++) {
  let total = 0
  const isLeftEdge = (i % width === 0)
  const isRightEdge = (i % width === width -1)

  if (squares[i].classList.contains('empty')) {
    if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('mine')) total ++
    if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('mine')) total ++
    if (i > 10 && squares[i -width].classList.contains('mine')) total ++
    if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('mine')) total ++
    if (i < 98 && !isRightEdge && squares[i +1].classList.contains('mine')) total ++
    if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('mine')) total ++
    if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('mine')) total ++
    if (i < 89 && squares[i +width].classList.contains('mine')) total ++
    squares[i].setAttribute('data', total)
  }
}

function click(square) { 
  console.log('ceil is', square.classList[1]);
  let currentId = square.id;
  if (isGameOver) return;
  if (square.classList.contains('checked') || square.classList.contains('flag')) return;
  if (square.classList.contains('mine')) {
    gameOver(square)
  } else {
    let total = square.getAttribute('data')
    if (total !=0) {
      square.classList.add('checked')
      if (total == 1) square.classList.add('one')
      if (total == 2) square.classList.add('two')
      if (total == 3) square.classList.add('three')
      if (total == 4) square.classList.add('four')
      if (total == 5) square.classList.add('five')
      if (total == 6) square.classList.add('six')
      square.innerHTML = total
      return
    }
    checkSquare(square, currentId)
  }
  square.classList.add('checked')
}

function addFlag(square) {
  if (!square.classList.contains('flag')) {
    square.classList.add('flag');
    square.innerHTML = ' 🚩';
    flags++;
    flagsAmount.innerHTML = minesAmount - flags;
  } else {
    square.classList.remove('flag');
    square.innerHTML = '';
    flags--;
    flagsAmount.innerHTML = minesAmount - flags;
  }
}

function gameOver(square) {
  result.innerHTML = 'BOOM! Game Over! Try one more time...'
  isGameOver = true

  squares.forEach(square => {
    if (square.classList.contains('mine')) {
      square.innerHTML = '💣'
      square.classList.remove('mine')
      square.classList.add('checked')
    }
  })
}

function checkSquare(square, currentId) {
  const isLeftEdge = (currentId % width === 0)
  const isRightEdge = (currentId % width === width - 1)

  setTimeout(() => {
    if (currentId > 0 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) -1].id
      //const newId = parseInt(currentId) - 1   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId > 9 && !isRightEdge) {
      const newId = squares[parseInt(currentId) +1 -width].id
      //const newId = parseInt(currentId) +1 -width   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId > 10) {
      const newId = squares[parseInt(currentId -width)].id
      //const newId = parseInt(currentId) -width   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId > 11 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) -1 -width].id
      //const newId = parseInt(currentId) -1 -width   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId < 98 && !isRightEdge) {
      const newId = squares[parseInt(currentId) +1].id
      //const newId = parseInt(currentId) +1   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId < 90 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) -1 +width].id
      //const newId = parseInt(currentId) -1 +width   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId < 88 && !isRightEdge) {
      const newId = squares[parseInt(currentId) +1 +width].id
      //const newId = parseInt(currentId) +1 +width   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId < 89) {
      const newId = squares[parseInt(currentId) +width].id
      //const newId = parseInt(currentId) +width   ....refactor
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
  }, 10)
}