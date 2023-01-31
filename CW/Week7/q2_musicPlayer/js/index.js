const audio = document.getElementById('audio');
const endTime = document.getElementById('endTime');
const currentTime = document.getElementById('currentTime');
const progressTimeLine = document.getElementById('progress-time-line');
let durationMusic;

setTimeout(() => {
    durationMusic = audio.duration;
    endTime.innerText = calculateTotalValue(durationMusic);
}, 100);

const calculateTotalValue = length => {
    const minutes = Math.floor(length / 60);
    let seconds_int = length - minutes * 60;
    if (seconds_int < 10) {
        seconds_int = "0" + seconds_int;
    }
    const seconds_str = seconds_int.toString();
    const seconds = seconds_str.substr(0, 2);
    return minutes + ':' + seconds;
}

const updateCurrentTime = () => {
    const currentSecond = audio.currentTime;
    currentTime.innerText = calculateTotalValue(currentSecond);
    const width = (currentSecond / audio.duration) * 100;
    progressTimeLine.style.width = `${width}%`;
}

setInterval(updateCurrentTime, 1000);