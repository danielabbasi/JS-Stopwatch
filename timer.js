class Timer {
    constructor(){
        this.isRunning = false;
        this.timeElapsed = 0;
        this.lapTimePress = 0;
        this.lapTimesArray = [];
        this.lapTimesDifferenceArray = [];
        this.timeText = document.getElementById('time');
        this.startStopText = document.getElementById('startStop');
        this.lapResetText = document.getElementById('lapReset');
        this.timeText = document.getElementById('time');

        this.updateTime = () => {
            this.timeElapsed++;
            this.timeText.textContent = this.millisecondConversion(this.timeElapsed);
        }
    }
    
    millisecondConversion(timeElapsed) {
        var milliseconds = timeElapsed % 100;
        var seconds = Math.floor((timeElapsed / 100) % 60);
        var minutes = Math.floor((timeElapsed / (60 * 100)) % 60);
        const pad = (time) => time < 10 ? '0' + time : time
        
        return pad(minutes) + ":" + pad(seconds) + "." + pad(milliseconds);
    }

    startStop() {
        if (this.isRunning == false) {
            this.interval = setInterval(this.updateTime, 10);
            this.isRunning = true;
            this.startStopText.textContent = 'Stop';
            this.lapResetText.textContent = 'Lap';
        }
        else {
            clearInterval(this.interval)
            this.isRunning = false;
            this.startStopText.textContent = 'Start';
            this.lapResetText.textContent = 'Reset';
        }
    }    

    lapReset() {
        if (this.isRunning == false) {
            //Reset hit
            this.timeText.textContent = '00:00:00';
            clearInterval(this.interval);
            this.timeElapsed = 0;
        }
        else {
            //Lap button clicked
            this.lapTimesArray.push(this.timeElapsed);
            this.lapTimesArray.reduce((a, b) => {
                this.lapTimesDifferenceArray.push(b - a)
                return b
            })
            let currentLap = this.lapTimesDifferenceArray.pop
            // currentLap.push(this.lapTimesDifferenceArray.pop());
            console.log("current lap " + currentLap);
        
            lapList.innerHTML = '<ul>' + currentLap.map(function (lapTimess) {
            return '<li>' + lapTimess + '<li>';
            }).join('') + '</ul>';
            console.log("difference " + this.lapTimesDifferenceArray[this.lapTimesDifferenceArray.length - 1]);
        }
    }
}

const timer = new Timer();