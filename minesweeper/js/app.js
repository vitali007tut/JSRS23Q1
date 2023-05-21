// add favicon
document.head.insertAdjacentHTML(
  "beforeend",
  '<link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR42mNgGArgP90N+I9Eo2OiDfyPBxOnGQbIMYRsA/6Tgck2iOwA/E+3WKA4HQxsUiYJAAAf1lyk4ulhiwAAAABJRU5ErkJggg==" type="image/x-icon">'
);

let sec = 0;
let time = null;
let squares = [];
let stepsNumber = 0;
const width = 10;
const minesAmount = 10;
let flags = 0;
let isGameOver = false;

// add in body
const result = addHtmlElement("div", 'result', document.body);
const container = addHtmlElement("div", 'container', document.body);
// add in contaner
const dropDowns = addHtmlElement('div', 'mine__drop-downs', container);
const topBar = addHtmlElement('div', 'mine__top-bar', container);
// add in dropDowns
const dropDown = addHtmlElement('div', 'mine__drop-down', dropDowns);
dropDown.classList.add('hidden');
// add in dropDown
const dropDownTitle = addHtmlElement('div', 'mine__drop-down__title', dropDown, 'Game settings')
dropDownTitle.addEventListener('click', () => {
  dropDown.classList.toggle('hidden');
})
const dropDownMenu = addHtmlElement('div', 'mine__drop-down__menu', dropDown);
// add in dropDownMenu
const dropDownRow = addHtmlElement('div', 'mine__drop-down__row', dropDownMenu);
// add in dropDownRow
addHtmlElement('div', 'mine__drop-down__check', dropDownRow);
const dropDownText = addHtmlElement('div', 'mine__drop-down__text', dropDownRow, 'New game');
dropDownText.addEventListener("click", () => {
  dropDown.classList.toggle('hidden');
  clearBoard()
  createBoard();
});
// add separator in dropDownMenu
addHtmlElement('div', 'mine__drop-down__separator', dropDownMenu)
// add in topBar
const topBarText = addHtmlElement('div', 'mine__top-bar__text', topBar, 'Game settings')
topBarText.addEventListener('click', () => {
  dropDown.classList.toggle('hidden');
})

function addHtmlElement(element, classElement, insert, innerText = '') {
  const newElement = document.createElement(element);
  newElement.classList.add(classElement);
  newElement.innerHTML = innerText;
  return insert.appendChild(newElement)
}

const mineContent = document.createElement("div");
mineContent.classList.add("mine-content");
container.appendChild(mineContent);

const scoreBar = document.createElement("div");
scoreBar.classList.add("mine__score-bar");
mineContent.appendChild(scoreBar);

const flagsLine = document.createElement("div");
flagsLine.innerHTML = `Flags left: <span class='flags-amount'></span>`;
scoreBar.appendChild(flagsLine);
const flagsAmount = document.querySelector(".flags-amount");

// const btnStart = document.createElement("button");
// btnStart.classList.add(".btn-start");
// btnStart.innerHTML = "New game";
// scoreBar.appendChild(btnStart);
// document.querySelector(".btn-start");

const timer = document.createElement("div");
timer.classList.add("timer");
timer.innerHTML = `${sec % 60} sec`;
scoreBar.appendChild(timer);

const clicksNumber = document.createElement("div");
clicksNumber.classList.add('clicks-number');
clicksNumber.innerHTML = `Clicks number: ${stepsNumber}`;
scoreBar.appendChild(clicksNumber)

const mineContentInner = document.createElement("div");
mineContentInner.classList.add("mine-content__inner");
mineContent.appendChild(mineContentInner);

function startTimer() {
  time = setInterval(() => {
    sec++;
    timer.innerHTML = `${sec % 60} sec`;
  }, 1000);
}

// new game using button click
// btnStart.addEventListener("click", () => {
//   clearBoard()
//   createBoard();
// });

function createBoard() {
  flagsAmount.innerHTML = minesAmount;

  const minesArray = Array(minesAmount).fill("mine");
  const emptyArray = Array(width * width - minesAmount).fill("empty");
  const gameArray = emptyArray.concat(minesArray);
  const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.classList.add(`ceil`, `${shuffledArray[i]}`);
    mineContentInner.appendChild(square);
    squares.push(square);

    square.addEventListener("click", function (e) {
      click(square);
    });
    square.oncontextmenu = function (e) {
      e.preventDefault();
      addFlag(square);
    };
  }

  // add total mines around the empty ceil
  for (let i = 0; i < squares.length; i++) {
    let total = 0;
    const isLeftEdge = i % width === 0; // left column
    const isRightEdge = i % width === width - 1; // right column
    if (squares[i].classList.contains("empty")) {
      if (!isLeftEdge && squares[i - 1].classList.contains("mine")) total++;
      if (!isRightEdge && squares[i + 1].classList.contains("mine")) total++;
      if (i >= width && squares[i - width].classList.contains("mine")) total++;
      if (i < (width*(width-1)) && squares[i + width].classList.contains("mine")) total++;
      if (i >= width && !isLeftEdge && squares[i - 1 - width].classList.contains("mine")) total++;
      if (i >= width && !isRightEdge && squares[i - width + 1].classList.contains("mine")) total++;
      if (i < (width*(width - 1)) && !isLeftEdge && squares[i - 1 + width].classList.contains("mine")) total++;
      if (i < (width*(width - 1)) && !isRightEdge && squares[i + 1 + width].classList.contains("mine")) total++;
      squares[i].setAttribute("data", total);
      // console.log(`ячейка ${i} заполняется total ${total}`)
      squares[i].innerHTML = total; // testing
    }
  }

  // mouse left click in ceil counter
document.querySelectorAll('.ceil').forEach((e) => e.addEventListener('mousedown', () => {
  var e = e || window.event;
  var btnCode;
  btnCode = e.button
  if (btnCode === 0) stepsNumber++;
 }))
}

createBoard();

function click(square) {
  let currentId = square.id;
  if (isGameOver) return;

  clicksNumber.innerHTML = `Clicks number: ${stepsNumber}`;
  if (
    document.querySelectorAll(".checked").length === 0 &&
    !square.classList.contains("flag")
  ) {
    if (square.classList[1] != "mine") {
      console.log("game started");
      startTimer();
    } else {
      const newSquareId = square.getAttribute('id')
      clearBoard();
      createBoard();
      const newSquare = document.getElementById(square.getAttribute("id"));
      click(newSquare);
      return;
    }
  }

  if (square.classList.contains("checked") || square.classList.contains("flag"))
    return;
  if (square.classList.contains("mine")) {
    gameOver(square);
  } else {
    let total = square.getAttribute("data");
    if (total != 0) {
      square.classList.add("checked");
      if (total === "1") square.classList.add("one");
      if (total === "2") square.classList.add("two");
      if (total === "3") square.classList.add("three");
      if (total === "4") square.classList.add("four");
      if (total === "5") square.classList.add("five");
      if (total === "6") square.classList.add("six");
      square.innerHTML = total;
      return;
    }
    checkSquare(square, currentId); // if total = 0, recursion on id
  }
  square.classList.add("checked");
}

function addFlag(square) {
  if (isGameOver) return;
  if (!square.classList.contains("flag")) {
    square.classList.add("flag");
    square.innerHTML = " 🚩";
    flags++;
    flagsAmount.innerHTML = minesAmount - flags;
    checkForWin();
  } else {
    square.classList.remove("flag");
    square.innerHTML = "";
    flags--;
    flagsAmount.innerHTML = minesAmount - flags;
  }
}

function gameOver(square) {
  clearInterval(time);
  result.innerHTML = "Boom! Game Over! Try one more time...";
  result.classList.add("game-over");
  isGameOver = true;

  squares.forEach((square) => {
    if (square.classList.contains("mine")) {
      square.innerHTML = "💣";
      // square.classList.remove("mine");
      square.classList.add("checked");
    }
  });
}

function checkSquare(square, currentId) {
  const isLeftEdge = currentId % width === 0; // left column
  const isRightEdge = currentId % width === width - 1; // right column
  setTimeout(() => {
    if (currentId > 0 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) - 1].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId > 9 && !isRightEdge) {
      const newId = squares[parseInt(currentId) + 1 - width].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId >= 10) {
      const newId = squares[parseInt(currentId - width)].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId > 10 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) - 1 - width].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 99 && !isRightEdge) {
      const newId = squares[parseInt(currentId) + 1].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 90 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) - 1 + width].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 88 && !isRightEdge) {
      const newId = squares[parseInt(currentId) + 1 + width].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
    if (currentId < 90) {
      const newId = squares[parseInt(currentId) + width].id;
      const newSquare = document.getElementById(newId);
      click(newSquare);
    }
  }, 10);
}

function checkForWin() {
  let matches = 0;
  for (let i = 0; i < squares.length; i++) {
    if (
      squares[i].classList.contains("flag") &&
      squares[i].classList.contains("mine")
    ) {
      matches++;
    }
    if (matches === minesAmount) {
      result.innerHTML = `Hooray! You found all mines in ${sec} seconds and ${stepsNumber} moves`;
      result.classList.add('game-win')
      clearInterval(time);
      isGameOver = true;
    }
  }
}

function clearBoard() {
  mineContentInner.innerHTML = '';
  flags = 0;
  clearInterval(time);
  sec = 0;
  stepsNumber = 0;
  flagsAmount.innerHTML = minesAmount;
  timer.innerHTML = `${sec % 60} sec`;
  clicksNumber.innerHTML = `Clicks number: ${stepsNumber}`;
  result.innerHTML = '';
  result.classList.remove('game-over', 'game-win')
  squares = [];
  isGameOver = false;
}