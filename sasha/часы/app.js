
  
var line = document.getElementById("line-m");
var lineh = document.getElementById("line-h");
var timer = document.getElementById("time");

setInterval(function(){

var time = new Date();
var min = time.getMinutes()*6;
var hour = time.getHours()*30;

line.style.transform = "rotate("+min+"deg)";
lineh.style.transform="rotate("+hour+"deg)";

timer.innerHTML=time.getHours()+":"+time.getMinutes();


},100);

