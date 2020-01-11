var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "pink";

var cx = innerWidth/2;
var cy = innerHeight/2;

ctx.fillRect(cx-300,cy-220,109,109);

ctx.beginPath();
ctx.arc(400,400,50,0,Math.PI,true);

ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(200,200);
-ctx.lineTo(400,400);
+ctx.lineTo(700,20)

ctx.lineTo(200,200)

ctx.stroke()
ctx.ClosePath();
ctx.fillRect(cx-300,cy-300,109,109);
