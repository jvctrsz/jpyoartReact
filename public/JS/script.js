let cardSection = document.querySelector('#root')
let aboutSection = document.querySelector('#about-content')
let worksSection = document.querySelector('#works-content')
let contactSection = document.querySelector('#contacts-content')

console.log(cardSection)

function activeCheck() {
    let activeElement = document.querySelector('.active');
    if (activeElement) {
        activeElement.classList.remove("active");
    }
}

function aboutMenu() {
    aboutSection.classList.add('active')
    activeCheck()
}

function worksMenu() {
    worksSection.classList.add('active')
    activeCheck()
}

function contactMenu() {
    activeCheck()
    contactSection.classList.add('active')
}

function cardMenu() {
    activeCheck()
    cardSection.classList.add('active')
}

