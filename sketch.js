function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("Aqua");
  if(mouseIsPressed){
    circle(mouseX,mouseY,100)
  }
}
