import playList from './playList.js';

const playListContainer = document.querySelector('.play-list');
let isPlay = false;
let audio = new Audio();
const btnPlay = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
let playNum = 0;
let counter = 0;
const customPlayerWrapper = document.querySelector('.custom-player')
const audioName = document.querySelector('.audio-name')
const btnSound = document.querySelector('.volume-button')
const timer = document.querySelector('.audio-time')
const closePlayerBtn = document.querySelector('.close-player')
const progress = document.querySelector('.progress')
const volume = document.querySelector('.volume')

// audio list

const showPlaylist = () => {
    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.innerHTML = playList[counter++].title;
        playListContainer.append(li)
    })
}

showPlaylist()

const li = document.querySelectorAll('.play-item')

const playItem = () => {
    for (let i = 0; i < li.length; i++) {
        if ((event.target.textContent === playList[i].title)) {
            audio.pause()
            li.forEach(el => el.classList.remove('item-active'))
            audio.src = playList[i].src;
            audio.play();
            audio.currentTime = 0;
            isPlay = true;
            btnPlay.classList.add('pause')
            li[i].classList.add('item-active')
            audioName.textContent = playList[i].title
            showCustomPlayer()
            playNum = i;
            counter = i;
        }
    }
}

li.forEach(el => {el.addEventListener('click', playItem)})


// play audio


const playAudio = () => {
    let currTime = audio.currentTime;
    if (!isPlay && currTime == 0) {
        audio.src = playList[playNum].src;
        audio.play();
        audio.currentTime = 0;
        isPlay = true;
        btnPlay.classList.add('pause')
        li[playNum].classList.add('item-active')
        audioName.textContent = playList[playNum].title
    } else if (isPlay) {
        audio.pause();
        btnPlay.classList.remove('pause')
        isPlay = false;
    } else if (!isPlay && !currTime == 0) {
        audio.src = playList[playNum].src;
        audio.play();
        audio.currentTime = currTime;
        isPlay = true;
        btnPlay.classList.add('pause')
        li[playNum].classList.add('item-active')
        audioName.textContent = playList[playNum].title
    }
}

btnPlay.addEventListener('click', playAudio)

const playNext = () => {
    if (customPlayerWrapper.classList.contains('player-visible')){
        if (playNum < playList.length - 1) {
            playNum++;
            audio.src = playList[playNum].src;
            audio.play();
            audio.currenTime = 0;
            li[playNum].classList.add('item-active')
            li[playNum - 1].classList.remove('item-active')
            audioName.textContent = playList[playNum].title
            btnPlay.classList.add('pause')
            isPlay = true;
        } else {
            playNum = 0;
            audio.src = playList[playNum].src;
            audio.play();
            audio.currenTime = 0;
            li[playNum].classList.add('item-active')
            li[li.length - 1].classList.remove('item-active')
            audioName.textContent = playList[playNum].title
            btnPlay.classList.add('pause')
            isPlay = true;
        }
    }
}

nextBtn.addEventListener('click', playNext)


const playPrev = () => {
    if (customPlayerWrapper.classList.contains('player-visible')) {
        if (playNum === 0) {
            playNum = playList.length - 1;
            audio.src = playList[playNum].src;
            audio.play();
            audio.currenTime = 0;
            li[playNum].classList.add('item-active')
            li[0].classList.remove('item-active')
            audioName.textContent = playList[playNum].title
            btnPlay.classList.add('pause')
            isPlay = true;
        } else {
            playNum--;
            audio.src = playList[playNum].src;
            audio.play();
            audio.currenTime = 0;
            li[playNum].classList.add('item-active')
            li[playNum + 1].classList.remove('item-active')
            audioName.textContent = playList[playNum].title
            btnPlay.classList.add('pause')
            isPlay = true;
        }
    }
}

prevBtn.addEventListener('click', playPrev)

audio.addEventListener('ended', playNext)

// custom audioplayer

const showCustomPlayer = () => {
    customPlayerWrapper.classList.add('player-visible')
}

const closeCustomPlayer = () => {
    customPlayerWrapper.classList.remove('player-visible')
    audio.pause();
    audio.currentTime = 0;
    progress.value = 0;
    btnPlay.classList.remove('pause')
    isPlay = false;
    li[playNum].classList.remove('item-active')
}

btnPlay.addEventListener('click', showCustomPlayer)

closePlayerBtn.addEventListener('click', closeCustomPlayer)


const updateProgress = () => {
    let percent = (audio.currentTime / playList[playNum].durationNum) * 100;
    progress.value = percent; 
    progress.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${percent}%, rgb(200, 200, 200) ${percent}%, rgb(200, 200, 200) 100%)`;
}

const scrub = () => {
    audio.currentTime = (audio.duration / 100) * progress.value
}

audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', scrub);


// volume

const updateVolume = () => {
    let vol = volume.value;
    audio.volume = vol;
    volume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${vol * 100}%, rgb(200, 200, 200) ${vol * 100}%, rgb(200, 200, 200) 100%)`;
}


const changeVolumeButton = () => {
    if (audio.volume === 0) {
        btnSound.classList.remove('sound');
        btnSound.classList.add('mute');
    } else if (audio.volume > 0) {
        btnSound.classList.remove('mute');
        btnSound.classList.add('sound');
    }
}


const offSound = () => {
    if (btnSound.classList.contains('sound')) {
        btnSound.classList.remove('sound')
        btnSound.classList.add('mute');
        volume.value = 0;
        audio.volume = 0;
        volume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) 0%, rgb(200, 200, 200) 0%, rgb(200, 200, 200) 100%)`;
    } else if (btnSound.classList.contains('mute')) {
        btnSound.classList.remove('mute');
        btnSound.classList.add('sound')
        volume.value = 1;
        audio.volume = 1;
        volume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) 100%, rgb(200, 200, 200) 100%, rgb(200, 200, 200) 100%)`;
    }
}

volume.addEventListener('input', updateVolume);
volume.addEventListener('input', changeVolumeButton);
btnSound.addEventListener('click', offSound)

// timer

const updateTimer = () => {
    let minutes = '0' + parseInt(audio.currentTime / 60, 10);
    let seconds = parseInt(audio.currentTime % 60).toString();
    if (seconds.length === 1) { 
        let strSeconds = '0' + seconds;
        timer.innerHTML = `${minutes}:${strSeconds} / ${playList[playNum].duration}`
    } else {
        timer.innerHTML = `${minutes}:${seconds} / ${playList[playNum].duration}`
    }
    setTimeout(updateTimer, 1000)
}

updateTimer()
