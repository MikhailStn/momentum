//weather

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidityDescription = document.querySelector('.humidity')
const inputCity = document.querySelector('.city')
let currLangRu = true;
const btnRu = document.querySelector('.ru')
const btnEn = document.querySelector('.en')



const translateToRus = () => {
  currLangRu = true;
  changeCity()
  if (inputCity.value === 'Minsk') {
    inputCity.value = 'Минск'
  }
  getQuotes()
}

const translateToEng = () => {
  currLangRu = false;
  changeCity()
  if (inputCity.value === 'Минск') {
    inputCity.value = 'Minsk'
  }
  getQuotes()
}

btnRu.addEventListener('click', translateToRus)
btnEn.addEventListener('click', translateToEng)

async function getWeather() {
    inputCity.value = localStorage.getItem('city')
    if (inputCity.value.length == 0) {
      if (currLangRu) {
        let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=3e55b51961166f67e54d4d0952001b41&units=metric`
        inputCity.value = 'Минск'
        const res = await fetch(weatherLink);
        const data = await res.json(); 
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = 'Ветер: ' + `${Math.round(data.wind.speed)}` + ' м/с';
        humidityDescription.textContent = 'Влажность воздуха: ' + `${Math.round(data.main.humidity)}` + '%';
      } else if (!currLangRu) {
        let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=3e55b51961166f67e54d4d0952001b41&units=metric`
        inputCity.value = 'Minsk'
        const res = await fetch(weatherLink);
        const data = await res.json(); 
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = 'Wind Speed: ' + `${Math.round(data.wind.speed)}` + ' m/s';
        humidityDescription.textContent = 'Humidity: ' + `${Math.round(data.main.humidity)}` + '%';
      }
    } else {
      if (currLangRu) {
        let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=ru&appid=3e55b51961166f67e54d4d0952001b41&units=metric`
        const res = await fetch(weatherLink);
        const data = await res.json(); 
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = 'Ветер: ' + `${Math.round(data.wind.speed)}` + ' м/с';
        humidityDescription.textContent = 'Влажность воздуха: ' + `${Math.round(data.main.humidity)}` + '%';
      } else if (!currLangRu) {
        let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=en&appid=3e55b51961166f67e54d4d0952001b41&units=metric`
        const res = await fetch(weatherLink);
        const data = await res.json(); 
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = 'Wind Speed: ' + `${Math.round(data.wind.speed)}` + ' m/s';
        humidityDescription.textContent = 'Humidity: ' + `${Math.round(data.main.humidity)}` + '%';
      }
    }
  }

getWeather()

async function changeCity() {
  if (currLangRu) {
    let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=ru&appid=3e55b51961166f67e54d4d0952001b41&units=metric`
    const res = await fetch(weatherLink);
    const data = await res.json();
    if (inputCity.value.length == 0) {
      weatherDescription.innerHTML = ''
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.textContent = '';
      temperature.textContent = 'Введите город'
      wind.textContent = ''
      humidityDescription.textContent = ''
    } else if (data.cod == '404') {
      weatherDescription.innerHTML = ''
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.textContent = '';
      temperature.textContent = 'Ошибка: город не найден'
      wind.textContent = ''
      humidityDescription.textContent = ''
    } else {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = 'Ветер: ' + `${Math.round(data.wind.speed)}` + ' м/с';
      humidityDescription.textContent = 'Влажность воздуха: ' + `${Math.round(data.main.humidity)}` + '%';
    }
  } else if (!currLangRu) {
    let weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=en&appid=3e55b51961166f67e54d4d0952001b41&units=metric`
    const res = await fetch(weatherLink);
    const data = await res.json();
    if (inputCity.value.length == 0) {
      weatherDescription.innerHTML = ''
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.textContent = '';
      temperature.textContent = 'Enter city'
      wind.textContent = ''
      humidityDescription.textContent = ''
    } else if (data.cod == '404') {
      weatherDescription.innerHTML = ''
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.textContent = '';
      temperature.textContent = 'Error: city is not found'
      wind.textContent = ''
      humidityDescription.textContent = ''
    } else {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = 'Wind Speed: ' + `${Math.round(data.wind.speed)}` + ' m/s';
      humidityDescription.textContent = 'Humidity: ' + `${Math.round(data.main.humidity)}` + '%';
    }
  }
}

inputCity.addEventListener('change', changeCity)

// local storage

const setLocalStorage = () => {
  localStorage.setItem('city', inputCity.value);
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('keydown', setLocalStorage)
window.addEventListener('click', setLocalStorage)

const getLocalStorage = () => {
  if(localStorage.getItem('city')) {
      inputCity.value = localStorage.getItem('city');
    }
}

window.addEventListener('load', getLocalStorage)

//quotes

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btnChange = document.querySelector('.change-quote')

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min)) + min)
}

let counter = getRandomNum(0, 20)

async function getQuotes() {
  if (currLangRu) {
    const quotes = 'quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();
    quote.textContent = data[counter].text
    author.textContent = data[counter].author
  } else if (!currLangRu) {
    const quotes = 'quotesEn.json';
    const res = await fetch(quotes);
    const data = await res.json();
    quote.textContent = data[counter].text
    author.textContent = data[counter].author
  }
}

getQuotes()

async function changeQuote() {
  if (currLangRu) {
    const quotes = 'quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();
    counter++
    if (counter === 20) {
      counter = 0
    }
    quote.textContent = data[counter].text
    author.textContent = data[counter].author
  } else if (!currLangRu) {
    const quotes = 'quotesEn.json';
    const res = await fetch(quotes);
    const data = await res.json();
    counter++
    if (counter === 20) {
      counter = 0
    }
    quote.textContent = data[counter].text
    author.textContent = data[counter].author
  }
}

btnChange.addEventListener('click', changeQuote)


const setLocalStorage1 = () => {
  localStorage.setItem('lang', currentLangRu);
}

window.addEventListener('beforeunload', setLocalStorage1)

const getLocalStorage1 = () => {
  if(localStorage.getItem('lang')) {
      currentLangRu = localStorage.getItem('lang');
      if (currentLangRu == 'false') {
        currLangRu = false
        getQuotes()
        getWeather()
        changeCity()
      } else if (currentLangRu == 'true') {
        currLangRu = true
        getQuotes()
        getWeather()
        changeCity()
      }
  }
}

window.addEventListener('load', getLocalStorage1)

