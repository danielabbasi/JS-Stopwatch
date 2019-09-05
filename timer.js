class Timer {
    constructor(onUpdate){
        this.isRunning = false;
        this.timeElapsed = 0;
        this.lapTimePress = 0;
        this.onUpdate = onUpdate; // IMPORTANT
        this.lapTimesArray = [];
        this.lapTimesDifferenceArray = [];

        this.updateTime = () => {
            this.isRunning = true

            this.interval = setInterval(() => {
                this.timeElapsed++;
                this.onUpdate();
            }, 10)
        }

        this.stopTime = () => {
            clearInterval(this.interval)
            this.isRunning = false;
            this.onUpdate();
        }

        this.resetTime = () => {
            this.timeElapsed = 0;
            this.lapTimesArray = [];
            this.lapTimesDifferenceArray = [];
            clearTableText();
            this.onUpdate();
        }
    }
    
    startStop() {
        if (this.isRunning === false) {
            this.updateTime();
        }
        else {
            this.stopTime();
        }
    }    

    lapReset() {
        if (this.isRunning == false) {
            this.resetTime();
        }
        else {
            this.lapTimesArray.push(this.timeElapsed);
            this.lapTimesDifferenceArray = findDifference(this.lapTimesArray)
            updateLapTimesTable(this.lapTimesDifferenceArray);
        }
    }
}

timer = new Timer(onUpdate);

function onUpdate() {
    updateTimeDisplay(millisecondConversion(timer.timeElapsed))
    updateStartStopButton(updateStartStopButtonText(timer.isRunning))
    updateLapResetButton(updateLapResetButtonText(timer.timeElapsed, timer.isRunning))
}

const millisecondConversion = (timeElapsed) => {
    var milliseconds = timeElapsed % 100;
    var seconds = Math.floor((timeElapsed / 100) % 60);
    var minutes = Math.floor((timeElapsed / (60 * 100)) % 60);
    const pad = (time) => time < 10 ? '0' + time : time
    
    return pad(minutes) + ":" + pad(seconds) + "." + pad(milliseconds);
}

const findDifference = (array) => {
    return array.slice(1).map(function(value, index) { 
        return value - array[index];
    })
}

const updateLapTimesTable = (laps) => {
    lapTable.innerHTML = '<table class="timer__table">' + laps.reverse().map(function (value, index) {
        return '<tr><td>' + 'Lap ' + (laps.length-index) + '.' + '</td><td>' + millisecondConversion(value) + '</td></tr>';
    }).join('') + '</table>';
}

const updateStartStopButtonText = (isRunning) => isRunning ? 'Stop' : 'Start';

const updateStartStopButton = (text) => document.getElementById('startStop').textContent = text;

const updateLapResetButtonText = (timeElapsed, isRunning) => timeElapsed && isRunning > 0 ? 'Lap' : 'Reset';

const updateLapResetButton = (text) => document.getElementById('lapReset').textContent = text;

const updateTimeDisplay = (time) => document.getElementById('time').textContent = time;

const clearTableText = (time) => document.getElementById('lapTable').innerHTML = '';