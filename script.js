const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

 function getClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
   if(h>12){
         h=h-12
     ampm.innerText="PM"
   }

    hour.textContent=h
    minutes.innerText=m
    seconds.innerText=s
   
}

setInterval(
    getClock
, 1000);