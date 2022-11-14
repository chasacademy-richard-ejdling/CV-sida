const lightDarkButtonWelcome = document.querySelector('.light-dark-mode-button')
const welcomeColor = document.querySelectorAll('.welcome-color')
const indexMain = document.querySelector('.index-main')

let lightModeOnWelcome = false;

if (sessionStorage.getItem('lightModeOn')) {
    lightModeOnWelcome = JSON.parse(sessionStorage.getItem('lightModeOn'))
}

if (lightModeOnWelcome === true) {
    lightDark()
}

function lightDark(){
    indexMain.classList.toggle('light-mode-welcome');

    welcomeColor.forEach(element => {
        element.classList.toggle('light-mode-welcome-hover');
    })
}

lightDarkButtonWelcome.addEventListener('click', lightDark)