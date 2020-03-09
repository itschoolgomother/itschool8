var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";




// for (var i = 0; i<100;i++){ 
// var randomX = Math.random() * innerWidth;
// var randomY = Math.random() * innerHeight;	
// var random = Math.random() * 255;
// ctx.strokeStyle='rgb('+random+','+random+','+random+')';
// ctx.strokeRect(randomX , randomY,random,random)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 




// }
function triangle(colors,X,Y){
ctx.beginPath();
ctx.strokeStyle=colors;
ctx.moveTo(X,Y);
ctx.lineTo(400,600);
ctx.lineTo(600,600);
ctx.lineTo(X,Y);
ctx.stroke();
ctx.closePath();
}
triangle("pink",100,100)
triangle("pink",300,300)
triangle("pink",400,400)
triangle("pink",200,200)
triangle("pink",900,900)
triangle("pink",800,800)
triangle("pink",700,700)
triangle("pink",700,700)
triangle("pink",1000,1000)
triangle("pink",1100,1100)
triangle("pink",1200,1200)
triangle("pink",1300,1300)
triangle("pink",1400,1400)
triangle("pink",1500,1500)
triangle("pink",1600,1600)
triangle("pink",1700,1700)
triangle("pink",1800,1800)