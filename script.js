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
if(h>9)
    hour.textContent=h
else 
   hour.textContent=`0${h}`

if(m>9)
    minutes.innerText=m
else
   minutes.innerText=`0${m}`
if(s>9)
   seconds.innerText=s
else
   seconds.innerText=`0${s}`

   
}

setInterval(
    getClock
, 1000);