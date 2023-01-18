const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name')
const toDoItems = document.querySelectorAll('.toDo-item')

let currLangRu = true;

const btnRu = document.querySelector('.ru')
const btnEn = document.querySelector('.en')

const translateToRus = () => {
    currLangRu = true;
    name.placeholder = '[Введите имя]'
    toDoItems.forEach(el => el.placeholder = 'Добавить задачу')
}
  
  const translateToEng = () => {
    currLangRu = false;
    name.placeholder = '[Enter name]'
    toDoItems.forEach(el => el.placeholder = 'Add ToDo')
}
  
btnRu.addEventListener('click', translateToRus)
btnEn.addEventListener('click', translateToEng)

const showGreeting = () => {
    if (currLangRu) {
        const date = new Date;
        let hours = date.getHours();
        let result = ''
        if (hours >= 6 && hours < 12) {
            result = 'Доброе утро,'
        } else if (hours >= 12 && hours < 18) {
            result = 'Добрый день,'
        } else if (hours >= 18 && hours <= 23) {
            result = 'Добрый вечер,'
        } else if (hours >= 0 && hours < 6) {
            result = 'Доброй ночи,'
        }
        greeting.innerHTML = result
    } else if (!currLangRu) {
        const date = new Date;
        let hours = date.getHours();
        let result = ''
        if (hours >= 6 && hours < 12) {
            result = 'Good morning,'
        } else if (hours >= 12 && hours < 18) {
            result = 'Good afternoon,'
        } else if (hours >= 18 && hours <= 23) {
            result = 'Good evening,'
        } else if (hours >= 0 && hours < 6) {
            result = 'Good night,'
        }
        greeting.innerHTML = result
    }
}

const showTime = () => {
    const date = new Date;
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showGreeting();
    showDate();
    setTimeout(showTime, 1000)
}

const date = document.querySelector('.date');

const showDate = () => {
    if (currLangRu) {
        let options = {weekday: 'long', month: 'long', day: 'numeric'};
        let currentDate = (new Date).toLocaleDateString('ru-Ru', options);
        date.innerHTML = currentDate;
    }  else if (!currLangRu) {
        let options = {weekday: 'long', month: 'long', day: 'numeric'};
        let currentDate = (new Date).toLocaleDateString('en-En', options);
        date.innerHTML = currentDate;
    }
}


// Local Storage

const setLocalStorage = () => {
    localStorage.setItem('name', name.value);
}

window.addEventListener('beforeunload', setLocalStorage)

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
      }
}

window.addEventListener('load', getLocalStorage)


// work with input 

const counter = 0;


const changeWidth = () => {
    if (name.value.length > 1) {
        name.style.width = `${(name.value.length + 1) * 25}px`
    } else {
        name.style.width = `280px` 
    }
}

window.addEventListener('keydown', changeWidth)
window.addEventListener('click', changeWidth)

const setLocalStorage1 = () => {
    localStorage.setItem('width', name.style.width);
}

window.addEventListener('beforeunload', setLocalStorage1)

const getLocalStorage1 = () => {
    if(localStorage.getItem('width')) {
        name.style.width = localStorage.getItem('width');
      }
}

window.addEventListener('load', getLocalStorage1)

// local storage

const setLocalStorage2 = () => {
    localStorage.setItem('lang', currentLangRu);
}

window.addEventListener('beforeunload', setLocalStorage2)

const getLocalStorage2 = () => {
    if(localStorage.getItem('lang')) {
        currentLangRu = localStorage.getItem('lang');
        if (currentLangRu == 'false') {
            name.placeholder = '[Enter name]'
            toDoItems.forEach(el => el.placeholder = 'Add ToDo')
            currLangRu = false
            showTime()
        } else if (currentLangRu == 'true') {
            name.placeholder = '[Введите имя]'
            toDoItems.forEach(el => el.placeholder = 'Добавить задачу')
            currLangRu = true
            showTime()
        }
    } else {
        showTime()
    }
}

window.addEventListener('load', getLocalStorage2)