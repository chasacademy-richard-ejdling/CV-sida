const lightDarkButton = document.querySelector('.light-dark-mode-button')
const body = document.querySelector('body')
const pageTextColor = document.querySelector('.page-text-color')
const pageMarker = document.querySelector('.page-marker')

let lightModeOn = false;

if (sessionStorage.getItem('lightModeOn')) {
    lightModeOn = JSON.parse(sessionStorage.getItem('lightModeOn'))
}

if (lightModeOn === true) {
    lightDark()
}

function lightDarkClick() {
    if (lightModeOn === false) {
        lightModeOn = true;
        sessionStorage.setItem('lightModeOn', 'true')
        lightDark()
    } else {
        lightModeOn = false;
        sessionStorage.setItem('lightModeOn', 'false')
        lightDark()
    }
}

function lightDark(){
    body.classList.toggle('light-mode-main');
    pageTextColor.classList.toggle('light-mode-nav-text');
    pageMarker.classList.toggle('light-mode-nav-page-marker');
}

lightDarkButton.addEventListener('click', lightDarkClick)
