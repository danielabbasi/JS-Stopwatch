class Timer {
    constructor(){
        this.isRunning = false;
        this.timeElapsed = 0;

        this.updateTime = () => {
            this.timeElapsed++;
        }
    }

    startPressed() {
        this.isRunning = true;
        setInterval(this.updateTime, 10);
    }

    clockTicker() {
        this.timeElapsed++;
    }

    stopPressed() {
        isRunning = false;
        clearInterval(this.updateTime)
    }
}