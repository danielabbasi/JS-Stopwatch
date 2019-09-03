var h1 = document.getElementsByTagName('h1')[0],
    time = document.getElementById('time'),
    start = document.getElementById('start'),
    milliseconds = 0, seconds = 0, minutes = 0;


function add(){
    milliseconds++;
    if(milliseconds >= 100){
        milliseconds = 0;
        seconds++;
        if(seconds >= 100){
            seconds = 0;
            minutes++;
        }
    }
}


