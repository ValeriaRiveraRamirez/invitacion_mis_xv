const Days = document.getElementById('days');
const Horus = document.getElementById('horus');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("November 22 2025 17:00:00").getTime();

function time(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance/1000/60/60/24);
    const hours = Math.floor(distance/1000/60/60)%24;
    const minutes = Math.floor(distance/1000/60)%60;
    const seconds = Math.floor(distance/1000)%60;

    Days.innerHTML=days;
    Horus.innerHTML=hours;
    Minutes.innerHTML=minutes;
    Seconds.innerHTML=seconds;
    
     console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
}
setInterval(time,1000);