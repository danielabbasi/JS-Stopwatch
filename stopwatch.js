var h1 = document.getElementsByTagName('h1')[0],
    time = document.getElementById('time'),
    start = document.getElementById('start'),
    formatTime,
    interval,
    buttonState = 0,
    milliseconds = 0, seconds = 0, minutes = 0;


function add() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
}

function pad(number) {
    if (number <= 9) {
        return "0" + number
    }
    else {
        return number
    }
}

function startClock() {
    add();
    // console.log("milliseconds " + milliseconds)
    // console.log("seconds " + seconds);
    // console.log("minutes " + minutes);
    formatTime = pad(minutes) + ":" + pad(seconds) + ":" + pad(milliseconds);
    time.innerHTML = formatTime;
}

start.addEventListener('click', function () {
    console.log("clicked")
    if (buttonState == 0) {
        interval = setInterval(startClock, 1);
        this.textContent = 'Stop';
        buttonState = 1;
    } else {
        clearInterval(interval);
        this.textContent = 'Start';
        buttonState = 0;
    }
});
