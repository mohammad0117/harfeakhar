// script for video player
const buttonPlayer = document.querySelectorAll('.player-button')
const file = document.querySelectorAll('video')
const content = document.querySelectorAll('.main-content__activation__video__content')
const PlayIcon = document.querySelectorAll('.play')
const PauseIcon = document.querySelectorAll('.pause')
const progressBar = document.querySelectorAll('.main-content__activation__video__tools-bar .progress')
const toolsBar = document.querySelectorAll('.main-content__activation__video__tools-bar')
const toolsBarPlay = document.querySelectorAll('.toolsbar-play')
const toolsBarPause = document.querySelectorAll('.toolsbar-pause')
const undo = document.querySelectorAll('.fa-undo')
const redo = document.querySelectorAll('.fa-redo')
const fileDuration = document.querySelectorAll('.time .duration')
const fileCurrentTime = document.querySelectorAll('.time .currenttime')
const downLoadButton = document.querySelectorAll('.fa-download')
const downLoadList = document.querySelectorAll('.download-list')
const tachometerButton = document.querySelectorAll('.fa-tachometer-alt')
const tachometerList = document.querySelectorAll('.tachometer-list')
const cogButton = document.querySelectorAll('.fa-cog')
const cogList = document.querySelectorAll('.cog-list')
const fullScreenButton = document.querySelectorAll('.fa-square')
const pictureInPictureButton = document.querySelectorAll('.fa-images')

function playing(input) {
    toolsBarPlay[input].style.display = 'none'
    toolsBarPause[input].style.display = 'block'
}
function pauseing(input) {
    toolsBarPause[input].style.display = 'none'
    toolsBarPlay[input].style.display = 'block'
}
function videoTime(input) {
    var seconds = Math.floor(file[input].currentTime % 60)
    var minutes = Math.floor(file[input].currentTime / 60)
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    fileCurrentTime[input].innerHTML = minutes + ':' + seconds
}
for (let counter = 0; counter < buttonPlayer.length; counter++) {
    buttonPlayer[counter].addEventListener('click', () => {
        file[counter].play()
        content[counter].style.visibility = 'hidden'
        toolsBar[counter].style.display = 'block'
        playing(counter)
    })
}
for (let counter = 0; counter < content.length; counter++){
    content[counter].addEventListener('click', () => {
        if (file[counter].paused) {
            file[counter].play()
            toolsBar[counter].style.display = 'block'
            content[counter].style.visibility = 'hidden'
            playing(counter)
        } else {
            file[counter].pause()
            pauseing(counter)
        }
    })
}
for (let counter = 0; counter < file.length; counter++) {
    file[counter].addEventListener('click', () => {
        if (file[counter].paused) {
            file[counter].play()
            toolsBar[counter].style.display = 'block'
            content[counter].style.visibility = 'hidden'
            PlayIcon[counter].style.visibility = 'visible'
            setTimeout(function () {
                PlayIcon[counter].style.visibility = 'hidden'
            }, 100);
            playing(counter)
        } else {
            file[counter].pause()
            PauseIcon[counter].style.visibility = 'visible'
            setTimeout(function () {
                PauseIcon[counter].style.visibility = 'hidden'
            }, 100);
            pauseing(counter)
        }
    })
}
for (let counter = 0; counter < file.length; counter++){
    file[counter].addEventListener('timeupdate', () => {
        const { currentTime, duration } = file[counter]
        progressBar[counter].style.width = `${(currentTime / duration) * 100}%`
        fileDuration[counter].innerHTML = Math.floor(file[counter].duration / 60) + ':00'
        videoTime(counter)
    })
}
for (let counter = 0; counter < toolsBarPause.length; counter++){
    toolsBarPause[counter].addEventListener('click', () => {
        file[counter].pause()
        pauseing(counter)
    })
}
for (let counter = 0; counter < toolsBarPlay.length; counter++){
toolsBarPlay[counter].addEventListener('click', () => {
    file[counter].play()
    playing(counter)
})
}
for (let counter = 0; counter < undo.length; counter++){
    undo[counter].addEventListener('click', () => {
        file[counter].currentTime -= 5
    })
}
for (let counter = 0; counter < redo.length; counter++){
    redo[counter].addEventListener('click', () => {
        file[counter].currentTime += 5
    })
}
for (let counter = 0; counter < downLoadButton.length; counter++){
    downLoadButton[counter].addEventListener('click', () => {
        downLoadButton[counter].classList.toggle('active-color')
        downLoadList[counter].classList.toggle('d-block')
    })
}
for (let counter = 0; counter < tachometerButton.length; counter++){
    tachometerButton[counter].addEventListener('click', () => {
        tachometerButton[counter].classList.toggle('active-color')
        tachometerList[counter].classList.toggle('d-block')
    })
}
for (let counter = 0; counter < cogButton.length; counter++){
    cogButton[counter].addEventListener('click', () => {
        cogButton[counter].classList.toggle('active-color')
        cogList[counter].classList.toggle('d-block')
    })
}
for (let counter = 0; counter < pictureInPictureButton.length; counter++){
    pictureInPictureButton[counter].addEventListener('click', () => {
        pictureInPictureButton[counter].classList.toggle('active-color')
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture()
        } else {
            if (document.pictureInPictureEnabled) {
                file[counter].requestPictureInPicture()
            }
        }
    })
}
for (let counter = 0; counter < fullScreenButton.length; counter++) {
    fullScreenButton[counter].addEventListener('click', () => {
        file[counter].requestFullscreen()
    })
}