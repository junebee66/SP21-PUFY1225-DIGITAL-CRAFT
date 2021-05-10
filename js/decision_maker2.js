function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  clear();
  background(220, 10);
  fill('red');
  ellipse(mouseX, mouseY, 10, 10);
}