const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-items')
const backOpacity = document.querySelector('.backOpacity')
const body = document.querySelector('body')
const liItems = document.querySelectorAll('.li-item')

hamburger.addEventListener('click', toggleMenu)
backOpacity.addEventListener('click', toggleMenu)
liItems.forEach(element => element.addEventListener('click', toggleMenu))

function toggleMenu() {
    hamburger.classList.toggle('hamburgerOpen')
    nav.classList.toggle('navOpen')
    backOpacity.classList.toggle('navOpen')
    body.classList.toggle('navOpen')
}