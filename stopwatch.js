var h1 = document.getElementsByTagName('h1')[0],
    time = document.getElementById('time'),
    start = document.getElementById('start'),
    lap = document.getElementById('lap'),
    formatTime,
    interval,
    buttonState = 0,
    buttonStateLap = 0,
    milliseconds = 0, seconds = 0, minutes = 0;


function add() {
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
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
    formatTime = pad(minutes) + ":" + pad(seconds) + ":" + pad(milliseconds);
    time.innerHTML = formatTime;
}

start.addEventListener('click', function () {
    console.log("clicked")
    if (buttonState == 0) {
        interval = setInterval(startClock, 10);
        this.textContent = 'Stop';
        buttonState = 1;
        lap.textContent = 'Lap';
    } else {
        clearInterval(interval);
        this.textContent = 'Start';
        buttonState = 0;
        lap.textContent = 'Reset';
    }
});

lap.addEventListener('click', function () {
    if (buttonStateLap == 0 && buttonState == 0) {
        time.innerText = "00:00:00";
        clearInterval(interval);
        milliseconds = 0, seconds = 0, minutes = 0;

        buttonStateLap = 1;


    } else if(buttonStateLap == 1 && buttonState == 0) {

        buttonStateLap = 0
        

    }

});
