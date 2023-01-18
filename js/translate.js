const i18Obj = {
    'Eng': {
      'settings': 'Settings',
      'language': 'Language',
      'back': 'Background',
      'tags': 'Image tags',
      'blocks': 'Hide block',
      'time': 'Time',
      'date': 'Date',
      'greet': 'Greeting',
      'quotes': 'Quotes',
      'weather': 'Weather',
      'player': 'Player',
      'toDo': 'ToDo',
      'todo-title': 'ToDo List',
      'clear-button': 'Clear all',
    },
    'Rus': {
      'settings': 'Настройки',
      'language': 'Язык',
      'back': 'Фон',
      'tags': 'Теги изображений',
      'blocks': 'Скрыть блок',
      'time': 'Время',
      'date': 'Дата',
      'greet': 'Приветствие',
      'quotes': 'Цитаты',
      'weather': 'Погода',
      'player': 'Плеер',
      'toDo': 'Список дел',
      'todo-title': 'Список дел',
      'clear-button': 'Очистить все',
    }
}

const ruBtn = document.querySelector('.ru')
const engBtn = document.querySelector('.en')
const allStrings = document.querySelectorAll('[data-i18]');
const tagsInput = document.querySelector('.tags-input')
let currentLangRu = true;

const getTranslate = (lang) => {
    allStrings.forEach(el => el.textContent = i18Obj[lang][el.dataset.i18]);
}

const a = (event) => {
    getTranslate(event.target.textContent);
}

const b = () => {
    getTranslate('Eng');
}

const c = () => {
    getTranslate('Rus');
}

const changeLangRu = () => {
    engBtn.classList.remove('active');
    ruBtn.classList.add('active');
    tagsInput.placeholder = 'Введите тег'
    currentLangRu = true
}

const changeLangEn = () => {
    ruBtn.classList.remove('active');
    engBtn.classList.add('active');
    tagsInput.placeholder = 'Enter tag'
    currentLangRu = false
}
  
engBtn.addEventListener('click', a);
engBtn.addEventListener('click', changeLangEn);

ruBtn.addEventListener('click', a);
ruBtn.addEventListener('click', changeLangRu);

// localstorage

const setLocalStorage = () => {
    localStorage.setItem('lang', currentLangRu);
}

window.addEventListener('beforeunload', setLocalStorage)

const getLocalStorage = () => {
    if(localStorage.getItem('lang')) {
        currentLangRu = localStorage.getItem('lang');
        if (currentLangRu == 'false') {
            b();
            changeLangEn();
        } else if (currentLangRu == 'true') {
            c();
            changeLangRu();
        }
    }
}

window.addEventListener('load', getLocalStorage)
