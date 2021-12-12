const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");

const audio = new Audio("silent_night.mp3");

playBtn.addEventListener("click", () => {
    audio.play()
})

pauseBtn.addEventListener("click", () => {
    audio.pause()
})

stopBtn.addEventListener("click", () => {
    audio.pause()
    audio.currentTime = 0
})

upBtn.addEventListener("click", () => {
    if (audio.volume === 1) {
        audio.volume = 1;
    } else {
        audio.volume += 0.1;
    }
})

downBtn.addEventListener("click", () => {
    if (audio.volume > 10) {
        audio.volume = 0;
    } else {
        audio.volume -= 0.1;
    }
})