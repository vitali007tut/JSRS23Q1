// hamburger task

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-items')
const backOpacity = document.querySelector('.backOpacity')
const body = document.querySelector('body')
const liItems = document.querySelectorAll('.li-item')

if (document.documentElement.clientWidth < 768) {
  hamburger.addEventListener('click', toggleMenu)
  backOpacity.addEventListener('click', toggleMenu)
  liItems.forEach(element => element.addEventListener('click', toggleMenu))
  
  function toggleMenu () {
    hamburger.classList.toggle('hamburgerOpen')
    nav.classList.toggle('navOpen')
    backOpacity.classList.toggle('navOpen')
    body.classList.toggle('navOpen')
  }
}

// carousel task

let items = document.querySelectorAll('.carousel .our-friends-cards');
let currentItem = 0;
let isEnabled = true;
let randomArr = []

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
	let indexPrev = currentItem === 0 ? 3 : currentItem
	let indexNext = currentItem + 2 === 4 ? 1 : currentItem + 2
	let prevH4 = document.querySelectorAll(`.our-friends-cards:nth-child(${indexPrev}) .pet-card > h4`)
	let prevImg = document.querySelectorAll(`.our-friends-cards:nth-child(${indexPrev}) .pet-card > img`)
	let nextH4 = document.querySelectorAll(`.our-friends-cards:nth-child(${indexNext}) .pet-card > h4`)
	let nextImg = document.querySelectorAll(`.our-friends-cards:nth-child(${indexNext}) .pet-card > img`)

	let activeNumbers = []
	let activeNames = document.querySelectorAll(`.our-friends-cards:nth-child(${currentItem + 1}) .pet-card > h4`)
	activeNames.forEach(element => {
		activeNumbers.push(element.innerHTML)
	})

	let newArr = []
	arrSource.forEach((elem, index) => {
		if (activeNumbers.includes(elem.name)) newArr.push(index)
	})
	let newRandom = []
	for (let i = 0; i < 3; i++) {
		while (newRandom.length < 3) {
			const randomNumber = Math.floor(Math.random() * 8)
			if (!newRandom.includes(randomNumber) && !(activeNumbers.includes(arrSource[randomNumber].name))) {
				newRandom.push(randomNumber)
			}
		}
	}
	for (let i = 0; i < 3; i++) {
		prevH4[i].innerHTML = arrSource[newRandom[i]].name
		nextH4[i].innerHTML = arrSource[newRandom[i]].name
		prevImg[i].outerHTML = '<img src=' + arrSource[newRandom[i]].img + ' alt="">'
		nextImg[i].outerHTML = '<img src=' + arrSource[newRandom[i]].img + ' alt="">'
	}
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function () {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function () {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');

}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.cycle.left').addEventListener('click', function () {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.cycle.right').addEventListener('click', function () {
	if (isEnabled) {
		nextItem(currentItem);
	}
})
/**/

const arrSource = []
async function getPet() {
	const pets = 'pets.json'
	const res = await fetch(pets)
	const data = await res.json()
	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			const element = data[key];
			arrSource.push(element)
		}
	}

	for (let i = 0; i < 3; i++) {
		activeImg[i].outerHTML = '<img src=' + arrSource[randomArr[i]].img + ' alt="">'
		activeH4[i].innerHTML = arrSource[randomArr[i]].name
	}

	for (let i = 3; i < 6; i++) {
		notActiveImgLeft[i - 3].outerHTML = '<img src=' + arrSource[randomArr[i]].img + ' alt="">'
		notActiveImgRight[i - 3].outerHTML = '<img src=' + arrSource[randomArr[i]].img + ' alt="">'
		notActiveH4Left[i - 3].innerHTML = arrSource[randomArr[i]].name
		notActiveH4Right[i - 3].innerHTML = arrSource[randomArr[i]].name
	}

}
getPet()
getRandomArray()

function getRandomArray() {
	while (randomArr.length < 6) {
		const randomNumber = Math.floor(Math.random() * 8)
		if (!randomArr.includes(randomNumber)) {
			randomArr.push(randomNumber)
		}
	}
}

// console.log(arrSource)
let activeImg = document.querySelectorAll(".active .pet-card > img")
let activeH4 = document.querySelectorAll(".active .pet-card > h4")

let notActiveImgLeft = document.querySelectorAll(".our-friends-cards:nth-child(2) > .pet-card > img")
let notActiveImgRight = document.querySelectorAll(".our-friends-cards:nth-child(3) > .pet-card > img")
let notActiveH4Left = document.querySelectorAll(".our-friends-cards:nth-child(2) > .pet-card > h4")
let notActiveH4Right = document.querySelectorAll(".our-friends-cards:nth-child(3) > .pet-card > h4")
