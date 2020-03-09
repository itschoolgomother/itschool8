function setup(){
	createCanvas(innerWidth,innerHeight,WEBGL);
	
}
function draw(){
	background(115,73,85);
	rotateX(mouseY / 200);
	rotateY(mouseX / 200);
	normalMaterial()
	cone(15,230,16,17)

}
