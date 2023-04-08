// hamburger task

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-items')
const backOpacity = document.querySelector('.backOpacity')
const body = document.querySelector('body')
const liItems = document.querySelectorAll('.li-item')

hamburger.addEventListener('click', toggleMenu)
backOpacity.addEventListener('click', toggleMenu)
liItems.forEach(element => element.addEventListener('click', toggleMenu))

function toggleMenu () {
  hamburger.classList.toggle('hamburgerOpen')
  nav.classList.toggle('navOpen')
  backOpacity.classList.toggle('navOpen')
  body.classList.toggle('navOpen')
}

// carusel task

const BTN_ARROW = document.querySelectorAll('.cycle')
BTN_ARROW.forEach(btn => btn.addEventListener('click', changeCards))
function changeCards () {
  console.log('btn click')
}

const randomArr = []

while (randomArr.length < 3) {
  const randomNumber = Math.floor(Math.random() * 8)
  if (!randomArr.includes(randomNumber)) {
    randomArr.push(randomNumber)
  }
}
console.log(randomArr)

async function getPet () {
  const pets = 'pets.json'
  const res = await fetch(pets)
  const data = await res.json()
  console.log(data)
    for (const i of randomArr) {
      console.log(`<div class="pet-card"><img src="${data[i].img}" alt="">
        <h4>${data[i].name}</h4>
        <button class="button-friend">Learn more</button>`)
    }
  }
  
getPet()
