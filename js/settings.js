const btnSettings = document.querySelector('.settings-button')
const settingsBlock = document.querySelector('.settings-wrapper')
const btnVisibily = document.querySelectorAll('.shown')
const audio = document.querySelector('.player')
const player = document.querySelector('.custom-player')
const timer = document.querySelector('.time')
const date = document.querySelector('.date')
const greeting = document.querySelector('.greeting-container')
const quotes = document.querySelector('.quote-wrapper')
const weather = document.querySelector('.weather')
const toDoBtn = document.querySelector('.toDo-button')
const toDolist = document.querySelector('.toDo-wrapper')



const showSettings = () => {
    settingsBlock.classList.toggle('settings-active')
}

btnSettings.addEventListener('click', showSettings)



const toggleTimer = () => {
    timer.classList.toggle('visible')
    timer.classList.toggle('hidden')
    btnVisibily[0].classList.toggle('shown')
}

btnVisibily[0].addEventListener('click', toggleTimer)

const toggleDate = () => {
    date.classList.toggle('visible')
    date.classList.toggle('hidden')
    btnVisibily[1].classList.toggle('shown')
}

btnVisibily[1].addEventListener('click', toggleDate)

const toggleGreeting = () => {
    greeting.classList.toggle('visible')
    greeting.classList.toggle('hidden')
    btnVisibily[2].classList.toggle('shown')
}

btnVisibily[2].addEventListener('click', toggleGreeting)

const toggleQuotes = () => {
    quotes.classList.toggle('visible')
    quotes.classList.toggle('hidden')
    btnVisibily[3].classList.toggle('shown')
}

btnVisibily[3].addEventListener('click', toggleQuotes)

const toggleWeather = () => {
    weather.classList.toggle('visible')
    weather.classList.toggle('hidden')
    btnVisibily[4].classList.toggle('shown')
}

btnVisibily[4].addEventListener('click', toggleWeather)

const togglePlayer = () => {
    audio.classList.toggle('visible');
    audio.classList.toggle('hidden')
    player.classList.toggle('visible')
    player.classList.toggle('hidden')
    btnVisibily[5].classList.toggle('shown')
}

btnVisibily[5].addEventListener('click', togglePlayer)

const toggleToDo = () => {
    toDoBtn.classList.toggle('visible')
    toDoBtn.classList.toggle('hidden')
    toDolist.classList.toggle('visible')
    toDolist.classList.toggle('hidden')
    btnVisibily[6].classList.toggle('shown')
}

btnVisibily[6].addEventListener('click', toggleToDo)


// local storage

