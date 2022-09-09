const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

setInterval(function() {
    hour.textContent=new Date().getHours()
    minutes.textContent=new Date().getMinutes()
    seconds.textContent=new Date().getSeconds()
}, 1000);
//seconds.textContent=seconds1

if(new Date().getHours()>12)
   ampm.textContent="PM"
else
   ampm.textContent="AM"
  