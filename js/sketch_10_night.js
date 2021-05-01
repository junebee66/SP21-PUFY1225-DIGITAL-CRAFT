

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  noCursor();
}

function draw() {
  background(0,0,35,5); 

  let star = { 
  x : random(width),
  y : random(height),
  size : random(1,6)
  }
  
  if(mouseX >=height){
  fill(random(0,360),random(0,360),0);
  ellipse(mouseX ,mouseY, 10, 10);
  }

  if(mouseX <=height ){
  fill(0,random(0,360),random(0,360));
  ellipse(mouseX ,mouseY, 30, 30);
  }

  //background star
  ellipse(star.x ,star.y, star.size, star.size);

}

