function setup(){
createCanvas(innerWidth, innerHeight,WEBGL);
  background(70,70,200);

}
function draw(){
  background(70,70,200);
rotateY(mouseX / 100);
rotateX(mouseY / 100);
normalMaterial();
torus(200,300,1000,100)

}