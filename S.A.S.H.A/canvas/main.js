var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";    

canvas.onmousemove = function(event){
   var x = event.offsetX;
   var y = event.offsetY;

ctx.beginPath();
ctx.fillStyle = "green"
ctx.arc(x,y,50,0,7)
ctx.fill() 
ctx.closePath();

}