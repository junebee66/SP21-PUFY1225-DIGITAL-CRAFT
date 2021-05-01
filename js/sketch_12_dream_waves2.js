
let xPos = 200;
let yPos = 200;
let ySpeed = 5;
let xSpeed = 2;
let faceHeight =7;
function setup(){
	// background(0,0,35,5); 
  createCanvas(1000,500);
  noStroke();
  // canvas.style('z-index','1');
}
function draw(){
  background(random(1,360),random(1,360),random(1,360),5);
  yPos += ySpeed;
  xPos += xSpeed;

  if(yPos >= height || yPos <=0){
    ySpeed *= -1;
    // background(random(0,360),100,100);
  }
  if(xPos >= width || xPos <= 0){
    xSpeed *=-1;
    // background(random(0,360),100,100);
  }

  let star = { 
  x : random(width),
  y : random(height),
  size : random(10,440)
  }


  if(mouseX >=height){
  fill(random(0,360),random(0,360),0,random(1,100));
  stroke(random(0,360),random(0,360),0,1);
  ellipse(mouseX ,mouseY, star.size, star.size);
  }

  if(mouseX <=height ){
  fill(0,random(0,360),random(0,360),random(1,100));
  stroke(0,random(0,360),random(0,360),1);
  ellipse(mouseX ,mouseY, star.size, star.size);
  }



  //person
  //body
  strokeWeight(3);
  stroke('black');
  fill('#f5c092');
  scale();
  beginShape();
  vertex(143+xPos, 154+yPos);
  vertex(144+xPos, 140+yPos);
  vertex(139+xPos, 122+yPos);
  vertex(133+xPos, 109+yPos);
  vertex(132+xPos, 91+yPos);
  vertex(136+xPos, 62+yPos);
  vertex(136+xPos, 46+yPos);
  vertex(141+xPos, 47+yPos);
  vertex(143+xPos, 49+yPos);
  vertex(142+xPos, 57+yPos);
  vertex(144+xPos, 57+yPos);
  vertex(146+xPos, 60+yPos);
  vertex(144+xPos, 63+yPos);
  vertex(143+xPos, 89+yPos);
  vertex(148+xPos, 110+yPos);
  vertex(158+xPos, 112+yPos);
  vertex(167+xPos, 110+yPos);
  vertex(172+xPos, 94+yPos);
  vertex(174+xPos, 67+yPos);
  vertex(174+xPos, 61+yPos);
  vertex(177+xPos, 60+yPos);
  vertex(176+xPos, 53+yPos);
  vertex(179+xPos, 52+yPos);
  vertex(182+xPos, 63+yPos);
  vertex(184+xPos, 97+yPos);
  vertex(175+xPos, 127+yPos);
  vertex(176+xPos, 156+yPos);
  // vertex(+xPos, +yPos);
  // vertex(+xPos, +yPos);
  // vertex(+xPos, +yPos);
  endShape();

  //face
  strokeWeight(3);
  stroke('black');
  fill('#f5c092');
  beginShape();
  vertex(150+xPos, 103-faceHeight+yPos);
  vertex(154+xPos, 97-faceHeight+yPos);
  vertex(157+xPos, 96-faceHeight+yPos);
  vertex(160+xPos, 98-faceHeight+yPos);
  vertex(166+xPos, 103-faceHeight+yPos);
  // vertex(+xPos, +yPos);
  // vertex(+xPos, +yPos);
  endShape();

  //head
  noStroke();
  fill('#70c5e7');
  ellipse(160+xPos,103+yPos,15,15);
  ellipse(155+xPos,103+yPos,15,15);

  //swimming suit
  strokeWeight(3);
  stroke('black');
  fill('#e95e3d');
  beginShape();
  vertex(142+xPos, 169+yPos);
  vertex(143+xPos, 156+yPos);
  vertex(158+xPos, 157+yPos);
  vertex(175+xPos, 156+yPos);
  vertex(178+xPos, 172+yPos);
  vertex(165+xPos, 179+yPos);
  vertex(157+xPos, 179+yPos);
  endShape();

  //legs
  strokeWeight(3);
  stroke('black');
  fill('#f5c092');
  beginShape();
  vertex(141+xPos, 171+yPos);
  vertex(156+xPos, 180+yPos);
  vertex(179+xPos, 163+yPos);
  vertex(178+xPos, 174+yPos);
  vertex(176+xPos, 204+yPos);
  vertex(172+xPos, 240+yPos);
  vertex(166+xPos, 256+yPos);
  vertex(164+xPos, 241+yPos);
  vertex(162+xPos, 184+yPos);
  vertex(159+xPos, 182+yPos);
  vertex(157+xPos, 184+yPos);
  vertex(156+xPos, 241+yPos);
  vertex(156+xPos, 250+yPos);
  vertex(153+xPos, 257+yPos);
  vertex(148+xPos, 253+yPos);
  vertex(148+xPos, 240+yPos);
  vertex(143+xPos, 205+yPos);
  vertex(141+xPos, 171+yPos);
  endShape();
}