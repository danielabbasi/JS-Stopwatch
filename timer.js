class Timer {
    constructor(){
        this.isRunning = false;
        this.timeElapsed = 0;
        this.lapTimePress = 0;
        this.lapTimesArray = [];

        this.updateTime = () => {
            this.timeElapsed++;
        }
    }

    startPressed() {
        this.isRunning = true;
        this.interval = setInterval(this.updateTime, 10);
    }

    stopPressed() {
        this.isRunning = false;
        clearInterval(this.interval)
    }

    calcLapTimes() {
        if (this.lapTimesArray.length == 0) {
            this.lapTimesArray.push(this.timeElapsed)
        } else {
            this.lapTimesArray.push(this.timeElapsed - this.lapTimesArray[-1])
        }
    }

    lapPressed() {
        
    }

    resetPressed() {
        
    }
}

const timer = new Timer();

startStop = () => {
    if (timer.isRunning == false) {
        timer.startPressed();
    }
    else {
        timer.stopPressed();

    }

lapReset = () => {
    if (timer.isRunning == false) {
        
    }
    else {
        lapPressed();
    }
}
    console.log(timer.isRunning)
    console.log(timer.timeElapsed)
}
