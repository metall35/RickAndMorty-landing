const button = document.querySelector("#nav-button")
const nav = document.querySelector('#nav-movil')

let click = false

const showNav = () => {
    nav.style.display = click ? "none" : "block"
    nav.classList.add = 'transition delay-300 duration-300 ease-in'
    click = !click
}

button.addEventListener('click', () => showNav())   