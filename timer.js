class Timer {
    constructor(){
        this.isRunning = false;
        this.timeElapsed = 0;
        this.lapTimePress = 0;
        this.lapTimesArray = [];
        this.lapTimesDifferenceArray = [];

        this.updateTime = () => {
            this.timeElapsed++;
            document.getElementById('time').textContent = this.millisecondConversion(this.timeElapsed);
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
            document.getElementById('startStop').textContent = 'Stop';
            document.getElementById('lapReset').textContent = 'Lap';
        }
        else {
            clearInterval(this.interval)
            this.isRunning = false;
            document.getElementById('startStop').textContent = 'Start';
            document.getElementById('lapReset').textContent = 'Reset';
        }
    }    

    lapReset() {
        if (this.isRunning == false) {
            //Reset hit
            document.getElementById('time').textContent = '00:00.00';
            clearInterval(this.interval);
            this.timeElapsed = 0;
        }
        else {
            //Lap button clicked
            this.lapTimesArray.push(this.timeElapsed);
            // this.lapTimesArray.reduce((a, b) => {
            //     this.lapTimesDifferenceArray.push(b - a)
            //     return b
            // })

            this.lapTimesDifferenceArray = this.lapTimesArray.map(lap = => {
                return lap - 
            } )

            

            console.log(this.lapTimesDifferenceArray);
            let currentLap = this.lapTimesDifferenceArray.pop
            console.log("current lap " + currentLap);
        
            lapList.innerHTML = '<ul>' + currentLap.map(function (lapTimess) {
            return '<li>' + lapTimess + '<li>';
            }).join('') + '</ul>';
            console.log("difference " + this.lapTimesDifferenceArray[this.lapTimesDifferenceArray.length - 1]);
        }
    }
}

const timer = new Timer();