var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "green";


var cx = innerWidth/2;
var cy = innerHeight/2;

ctx.fillRect(cx-100,cy-100,200,200)
	
ctx.fillStyle = "red";


ctx.beginPath();
ctx.moveTo(200,200);
-ctx.lineTo(400,400);
+ctx.lineTo(700,20)
ctx.lineTo(200,200)
ctx.stroke()
ctx.ClosePath();



