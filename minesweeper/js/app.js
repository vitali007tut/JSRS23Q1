let sec = 0

const btnStart = document.createElement('button')
btnStart.classList.add('.btn-start')
btnStart.innerHTML = 'start game'
document.body.appendChild(btnStart)
document.querySelector('.btn-start')
document.addEventListener('click', startTimer)

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

const width = 9
const minesAmount = 10
const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

const mineContent = document.createElement('div')
mineContent.classList.add('mine-content')
container.appendChild(mineContent)
//  = document.querySelector('.mine-content')
let squares = []

const minesArray = Array(minesAmount).fill('mine')
const emptyArray = Array(width*width - minesAmount).fill('empty')
const gameArray = emptyArray.concat(minesArray)
const shuffledArray = gameArray.sort(() => Math.random() - 0.5)

for(let i = 0; i < width*width; i++) {
  const square = document.createElement('div')
  square.setAttribute('id', i)
  square.classList.add(`ceil`, `${shuffledArray[i]}`)
  mineContent.appendChild(square)
  squares.push(square)

  square.addEventListener('click', function(e) {
    click(square)
  })

  //cntrl and left click
  square.oncontextmenu = function(e) {
    e.preventDefault()
    addFlag(square)
  }
}