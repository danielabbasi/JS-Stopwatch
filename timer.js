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
                this.timeElapsed++
                this.onUpdate()
                console.log(onUpdate);
            }, 10)
        }

        this.stopTime = () => {
            clearInterval(this.interval)
            this.isRunning = false
            this.onUpdate()
        }
    }
    

    startStop() {
        if (this.isRunning === false) {
            this.updateTime()
        }
        else {
            this.stopTime()
        }
    }    

    // lapReset() {
    //     if (this.isRunning == false) {
    //         clearInterval(this.interval);
    //         this.timeElapsed = 0;
    //     }
    //     else {
    //         //Lap button clicked
    //         this.lapTimesArray.push(this.timeElapsed);

    //         this.lapTimesDifferenceArray = this.lapTimesArray.map(lap = => {
    //             return lap - 
    //         } )

    //         console.log(this.lapTimesDifferenceArray);
    //         let currentLap = this.lapTimesDifferenceArray.pop
    //         console.log("current lap " + currentLap);
        
    //         lapList.innerHTML = '<ul>' + currentLap.map(function (lapTimess) {
    //         return '<li>' + lapTimess + '<li>';
    //         }).join('') + '</ul>';
    //         console.log("difference " + this.lapTimesDifferenceArray[this.lapTimesDifferenceArray.length - 1]);
    //     }
    // }
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

const updateStartStopButtonText = (isRunning) => isRunning ? 'Stop' : 'Start';

const updateStartStopButton = (text) => document.getElementById('startStop').textContent = text;

const updateLapResetButtonText = (timeElapsed, isRunning) => timeElapsed && isRunning > 0 ? 'Lap' : 'Reset';

const updateLapResetButton = (text) => document.getElementById('lapReset').textContent = text;

const updateTimeDisplay = (time) => document.getElementById('time').textContent = time;