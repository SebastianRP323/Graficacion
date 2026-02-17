let x=0;
let velocidad = 3;
function setup(){
  createCanvas(400,200);
}

function draw(){
  background(100);
  frameRate(30);
  circle(x,100,40);
  x+=velocidad;
  if (x>400 || x<0) {
    velocidad = -velocidad
  }

}