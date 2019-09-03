const time = document.getElementById('time');
const start = document.getElementById('start');
const lap = document.getElementById('lap');
let formatTime;
let interval = 0;
let buttonState = 0;
let buttonStateLap = 0;
let milliseconds = 0, seconds = 0, minutes = 0;
let lapTimes = [];

// Increases the timer
function updateTime() {
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

// Adds a preceding 0
const pad = (number) => number < 10 ? '0' + number : number

//Function that starts the stopwatch
function startClock() {
    updateTime();
    formatTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`
    formatTime2 = formatTime.minutes
    console.log(formatTime2)
    time.textContent = formatTime;
}

//On start button click start timer function, or show stop button
start.addEventListener('click', function () {
    console.log("clicked")
    if (buttonState == 0) {
        interval = setInterval(startClock, 10);
        this.textContent = 'Stop';
        this.style.backgroundColor = "#690000";
        lap.textContent = 'Lap';
        buttonState = 1;
    } else {
        clearInterval(interval);
        this.style.backgroundColor = "#006400";
        this.textContent = 'Start';
        lap.textContent = 'Reset';
        buttonState = 0;
    }
});

function calcLapTimes() {
    if (lapTimes.length == 0) {
        lapTimes.push(formatTime);
        console.log("ahh")
    } else {
        // console.log(lapTimes[lapTimes.length - 1])
        newLapTime = formatTime - lapTimes[lapTimes.length - 1];
        console.log(newLapTime);
        lapTimes.push(formatTime);
        // lapTimes.push(formatTime - lapTimes[lapTimes.length - 1]) 
    }
    // lapTimes[0] = formatTime;
    // lapTimes[1] = formatTime - lapTimes[0];
    // lapTimes[2] = formatTime - lapTimes[1]
    // lapTimes[3] = formatTime - lapTimes[2]
}

//On lap click, add lap or show reset
lap.addEventListener('click', function () {
    if (buttonStateLap == 0 && buttonState == 0) {
        time.innerText = "00:00:00";
        clearInterval(interval);
        milliseconds = 0, seconds = 0, minutes = 0;

        buttonStateLap = 1;


    } else {
        // lapTimes.push(formatTime);
        calcLapTimes();
        console.log(lapTimes[0]);
        var lapList = document.querySelector('#lapList')
        lapList.innerHTML = '<ul>' + lapTimes.map(function (lapTimes) {
            return '<li>' + lapTimes + '<li>';
        }).join('') + '</ul>';

        buttonStateLap = 0;


    }

});
