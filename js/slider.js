const prevBtn = document.querySelector('.slide-prev')
const nextBtn = document.querySelector('.slide-next')
const body = document.querySelector('.body')
const input = document.querySelector('.tags-input')

const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let res = (Math.floor(Math.random() * (max - min)) + min)
    return res;
}

const getTimeOfDay = () => {
    const date = new Date;
    let hours = date.getHours();
    let result = ''
    if (hours >= 6 && hours < 12) {
        result = 'morning'
    } else if (hours >= 12 && hours < 18) {
        result = 'afternoon'
    } else if (hours >= 18 && hours <= 23) {
        result = 'evening'
    } else if (hours >= 0 && hours < 6) {
        result = 'night'
    }
    return result
}

let randomNum = getRandomNum(1, 21);
let timeOfDay = getTimeOfDay();

const setBg = () => {
    let num = randomNum.toString()
    if (num.length == 1) {
        num = '0' + randomNum
    }
    let link = `url('https://raw.githubusercontent.com/MikhailStn/images/main/${timeOfDay}/${num}.jpg')`;
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/MikhailStn/images/main/${timeOfDay}/${num}.jpg`;
    img.onload = () => {      
      body.style.backgroundImage = `${link}`
    }
}


window.addEventListener('load', setBg)

const getSlideNext = () => {
    randomNum++;
    let num = randomNum.toString()
    if (num.length == 1) {
        num = '0' + randomNum
    } else if (num === '21') {
        randomNum = 1
        num = '0' + randomNum
    }
    if (buttons[0].classList.contains('active')) {
        let link = `url('https://raw.githubusercontent.com/MikhailStn/images/main/${timeOfDay}/${num}.jpg')`;
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/MikhailStn/images/main/${timeOfDay}/${num}.jpg`;
        img.onload = () => {      
          body.style.backgroundImage = `${link}`
        }
    } else if (buttons[1].classList.contains('active')) {
        getLinkToImage()
    } else if (buttons[2].classList.contains('active')) {
        getLinkToImageFlickr()
    }
}

const getSlidePrev = () => {
    randomNum--;
    let num = randomNum.toString()
    if (num.length == 1) {
        num = '0' + randomNum
    } 
    if (num === '00') {
        randomNum = 20
        num = randomNum
    }
    if (buttons[0].classList.contains('active')) {
        let link = `url('https://raw.githubusercontent.com/MikhailStn/images/main/${timeOfDay}/${num}.jpg')`;
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/MikhailStn/images/main/${timeOfDay}/${num}.jpg`;
        img.onload = () => {      
          body.style.backgroundImage = `${link}`
        }
    } else if (buttons[1].classList.contains('active')) {
        getLinkToImage()
    } else if (buttons[2].classList.contains('active')) {
        getLinkToImageFlickr()
    }
}

prevBtn.addEventListener('click', getSlidePrev)
nextBtn.addEventListener('click', getSlideNext)


// UNSPLASH API

const buttons = document.querySelectorAll('.bg')
const tagsInput = document.querySelector('.tags-input')


const pressGitHub = () => {
    buttons[0].classList.add('active')
    buttons[1].classList.remove('active')
    buttons[2].classList.remove('active')
    tagsInput.setAttribute('disabled', '')
    tagsInput.style.borderBottom = 'grey 1px solid'
    setBg()
    input.value = ''
}

const pressUnsplash = () => {
    buttons[0].classList.remove('active')
    buttons[1].classList.add('active')
    buttons[2].classList.remove('active')
    tagsInput.removeAttribute('disabled')
    tagsInput.style.borderBottom = 'white 1px solid'
    getLinkToImage()
}

const pressFlickr = () => {
    buttons[0].classList.remove('active')
    buttons[1].classList.remove('active')
    buttons[2].classList.add('active')
    tagsInput.removeAttribute('disabled')
    tagsInput.style.borderBottom = 'white 1px solid'
    getLinkToImageFlickr()
}

buttons[0].addEventListener('click', pressGitHub)
buttons[1].addEventListener('click', pressUnsplash)
buttons[2].addEventListener('click', pressFlickr)


async function getLinkToImage() {
    if (input.value.length === 0) {
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=rdpS5ybOnGoLe2lg_nVvYMkcXdM29FaMQJDTAbV_hxQ`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.urls.full);
        let link = `url('${data.urls.regular}')`
        body.style.backgroundImage = `${link}`
    } else {
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${input.value}&client_id=rdpS5ybOnGoLe2lg_nVvYMkcXdM29FaMQJDTAbV_hxQ`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.urls.full);
        let link = `url('${data.urls.regular}')`
        body.style.backgroundImage = `${link}`
    }
}

async function getLinkToImageFlickr() {
    if (input.value.length === 0) {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=15541035a13502f2bdcc14565e9064dc&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.photos.photo[getRandomNum(1, 50)].url_l);
        let link = `url('${data.photos.photo[getRandomNum(1, 50)].url_l}')`
        body.style.backgroundImage = `${link}`
    } else {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=15541035a13502f2bdcc14565e9064dc&tags=${input.value}&extras=url_l&format=json&nojsoncallback=1`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.photos.photo[getRandomNum(1, 50)].url_l);
        let link = `url('${data.photos.photo[getRandomNum(1, 50)].url_l}')`
        body.style.backgroundImage = `${link}`
    }
}

input.addEventListener('change', () => {if (buttons[1].classList.contains('active')) {getLinkToImage()} else if (buttons[2].classList.contains('active')) {getLinkToImageFlickr()}})