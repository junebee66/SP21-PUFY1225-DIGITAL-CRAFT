//this time I drew the different weather icons on the right
//and tried to place it together with the previous cat site I drew from last week

const boxX = 700;
const boxY = 80;
const boxH = 45;
var green1x = 100;
var green1y = 470;
var green2y = 420;//dark and long
var green3y = 390;


function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.style('z-index','-1');
}

function draw() {
  background("#fbf8e5");
  noStroke();
  angleMode(DEGREES);

//weather boxes ALL
push();
  translate(130, 70);
  //boxes
  noFill();
  stroke("black");
  strokeWeight(2);
  rect (boxX, boxY, 270, boxH, 8.3);

  rect (boxX, boxY+60, 270, boxH, 8.3);

  rect (boxX, boxY+120, 270, boxH, 8.3);

  rect (boxX, boxY+180, 270, boxH, 8.3);

  //sun
  push();
  translate(boxX+15, boxY+8.5);
  fill(245, 187, 87);
  stroke('#000000');
  strokeWeight(4);
  scale(0.5);
  line(9, 4, 15, 11);
  line(24, 0, 24, 9);
  line(38, 4, 33, 11);
  line(48, 16, 38, 19);
  line(48, 32, 39, 29);
  line(33, 37, 39, 44);
  line(24, 40, 24, 49);
  line(15, 37, 9, 44);
  line(9, 29, 0,32);
  line(9, 19, 0, 16);
  pop();

//clouds
  push();
  translate(boxX+10, boxY+64);
  scale(0.6);
  fill('grey');
  noStroke();
  ellipse(11,33,23,23);
  ellipse(30,27,34,32);
  ellipse(49,34,23,22);  
  rect(11,37,39,8);
  pop();

//water drop
  push();
  translate(boxX+19, boxY+129);
  scale(.5);
  fill('grey');
  noStroke();
  
    //big grey
    ellipse(16,41,33,33);
    
    beginShape();
      vertex(0, 38);
      vertex(16, 0);
      vertex(32,38);
    endShape(CLOSE);

    //white small
    fill('white')
    ellipse(22,44,12,16);
    
    beginShape();
      vertex(15, 42);
      vertex(22, 23);
      vertex(28,42);
    endShape(CLOSE);
  pop();

//plant
  push();
  translate(boxX+25, boxY+200);
  scale(.7);
  fill('grey');
  noStroke();
  // arc(7, 22, 15, 20, 80,220);
  // arc(7, 22, 16, 19, 221,79);

    //left leaf
    push();
    translate(-50,-30);
      rotate(330);
      ellipse(22,44,14,16);
      beginShape();
        vertex(15, 42);
        vertex(22, 23);
        vertex(28,42);
      endShape(CLOSE);
    pop();

    //right leaf
    push();
    translate(18,-45);
      rotate(30);
      ellipse(22,44,14,16);
      beginShape();
        vertex(15, 42);
        vertex(22, 23);
        vertex(28,42);
      endShape(CLOSE);
    pop();

    //left branch
    push();
    translate(-30,-10);
    rotate(330);
    beginShape();
        vertex(11, 38);
        vertex(14, 15);
        vertex(18, 38);
      endShape(CLOSE);
    pop();

    //right branch
    push();
    translate(3,-20);
    rotate(30);
    beginShape();
        vertex(13, 43);
        vertex(20, 18);
        vertex(20, 43);
      endShape(CLOSE);
    pop();
  pop();
pop();



//the cat site I drew from last week
push();
translate(130,150);
  //greens
  fill("#77AB80");
  ellipse(green1x+50, green1y, 210, 130);
  fill("#77AB80");
  ellipse(green1x+70, green1y, 210, 330);
  fill("#77AB80");
  ellipse(green1x+100, green1y, 210, 130);
  fill("#77AB80");
  ellipse(green1x+150, green1y, 210, 330);
  fill("#77AB80");
  ellipse(green1x+190, green1y, 210, 130);
  fill("#77AB80");
  ellipse(green1x+250, green1y, 210, 330);
  fill("#77AB80");
  ellipse(green1x+350, green1y-50, 210, 230);
  fill("#77AB80");
  ellipse(green1x+450, green1y-50, 210, 230);
  ellipse(green1x+500, green1y-50, 210, 230);
  fill("#77AB80");
  ellipse(green1x+550, green1y, 210, 130);
  fill("#77AB80");
  ellipse(green1x+650, green1y, 210, 330);
  fill("#77AB80");
  ellipse(green1x+750, green1y, 210, 330);
  fill("#77AB80");
  
  fill("#77AB80");
  ellipse(green1x+700, green1y-50, 210, 230);

  fill("#76A25F");
  ellipse(100, green1y, 81, 105);
  ellipse(green1x+50, green1y, 51, 105);
  fill("#76A25F");
  ellipse(green1x+70, green1y, 51, 50);
  fill("#B3CA33");
  ellipse(green1x+90, green1y, 51, 105);
  fill("#B3CA33");
  ellipse(green1x+190, green1y, 51, 90);
  ellipse(green1x+130, green1y, 91, 105);
  fill("#76A25F");
  ellipse(green1x+150, green1y, 51, 150);
  fill("#B3CA33");
  ellipse(green1x+200, green3y, 31, 130);
  fill("#93C75A");
  ellipse(green1x+150, green1y-15, 51, 105);
  fill("#B3CA33");
  ellipse(green1x+300, green3y, 31, 90);
  ellipse(green1x+330, green1y, 41, 105);
  fill("#B3CA33");
  ellipse(green1x+270, green3y-15, 31, 90);
  fill("#93C75A");
  ellipse(green1x+250, green1y, 81, 105);
  fill("#81AC49");
  ellipse(green1x+250, green2y-5, 31, 150);
  fill("#76A25F");
  ellipse(green1x+300, green1y, 91, 150);
  ellipse(green1x+350, green1y, 111, 105);
  fill("#76A25F");
  ellipse(green1x+300, green3y, 31, 90);
  ellipse(green1x+230, green1y-5, 71, 105);
  fill("#81AC49");
  ellipse(green1x+400, green2y, 71, 170);
  fill("#93C75A");
  ellipse(green1x+450, green1y, 41, 90);
  ellipse(green1x+500, green1y, 61, 105);
  fill("#81AC49");
  ellipse(green1x+500, green2y-5, 81, 180);
  fill("#B3CA33");
  ellipse(green1x+540, green3y, 31, 130);
  fill("#93C75A");
  ellipse(green1x+550, green1y, 41, 90);
  ellipse(green1x+630, green1y-5, 61, 90);
  fill("#B3CA33");
  ellipse(green1x+600, green2y, 81, 90);
  fill("#93C75A");
  ellipse(green1x+650, green1y, 81, 105);
  fill("#81AC49");
  ellipse(green1x+190, green1y, 51, 90);
  ellipse(green1x+210, green1y, 51, 90);
  ellipse(green1x+250, green1y, 51, 90);
  fill("#B3CA33");
  ellipse(green1x+790, green1y, 151, 90);
  ellipse(green1x+690, green1y, 51, 90);
  fill("#B3CA33");
  ellipse(green1x+190, green1y, 51, 90);
  ellipse(green1x+690, green1y, 51, 50);
  fill("#81AC49");
  ellipse(green1x+590, green1y, 51, 30);
  ellipse(green1x+190, green1y, 51, 40);

  ellipse(green1x+190, green1y, 51, 90);
  fill("#93C75A");
  ellipse(green1x+730, green1y-15, 31, 90);
  ellipse(green1x+750, green1y, 31, 105);
  fill("#B3CA33");
  ellipse(green1x+300, green3y, 31, 130);
  ellipse(green1x+800, green1y-15, 51, 80);
  
  fill("#81AC49");
  ellipse(green1x+50, green2y, 81, 130);
  fill("#93C75A");
  ellipse(green1x+50, green1y, 81, 105);
  ellipse(green1x+350, green1y, 41, 105);
  ellipse(green1x+750, green1y, 81, 95);
  ellipse(green1x+500, green1y, 51, 105);
  ellipse(green1x+400, green1y, 71, 105);
  ellipse(green1x+50, green1y, 51, 105);
  fill("#B3CA33");
  ellipse(green1x+70, green1y, 51, 50);
  fill("#B3CA33");
  ellipse(green1x+90, green1y, 51, 105);
  fill("#B3CA33");
  ellipse(green1x+690, green1y, 51, 90);
  ellipse(green1x+730, green1y, 91, 105);
  fill("#B3CA33");
  


  ellipse(green1x+50, green1y, 51, 105);
  fill("#76A25F");
  ellipse(green1x+70, green1y, 51, 50);
  fill("#B3CA33");
  ellipse(green1x+90, green1y, 51, 55);
  fill("#B3CA33");
  ellipse(green1x+190, green1y, 51, 90);
  ellipse(green1x+530, green1y, 91, 105);
  fill("#76A25F");
  ellipse(green1x+750, green1y, 51, 150);
  fill("#B3CA33");
  ellipse(green1x+800, green3y, 31, 50);

  fill("#B3CA33");
  ellipse(green1x+400, green2y, 41, 90);
  ellipse(green1x+500, green1y, 31, 99);
  fill("#B3CA33");
  ellipse(green1x+790, green1y, 51, 90);
  ellipse(green1x+690, green1y, 51, 90);
  fill("#B3CA33");
  ellipse(green1x+190, green1y, 51, 90);
  arc

  //grey cement on both sides
  fill("#A2A2A2");
  rect(90,508,291,134,30);

  fill("#A2A2A2");
  rect(622,508,291,134,30);
    //grey cement on both sides
  fill("#A2A2A2");
  rect(90,508,291,134,30);

  fill("#A2A2A2");
  rect(622,508,291,134,30);


  //shelter bottom
  fill("#d1cfb9");
  beginShape();
  vertex(378,641);
  vertex(421,609);
  vertex(581,609);
  vertex(622,638);
  endShape(CLOSE);

  //shelter side wall
  fill("#666666");
  beginShape();
  vertex(378,507);
  vertex(417,483);
  vertex(421,609);
  vertex(378,641);
  endShape(CLOSE);

  fill("#666666");
  beginShape();
  vertex(581,486);
  vertex(623,504);
  vertex(622,638);
  vertex(581,609);
  endShape(CLOSE);

  //cement shadows(triangles)
  fill("#909090");
  triangle(233,642,378,530,378,641);

  fill("#909090");
  triangle(649,639,913,639,913,528);

  fill("#B3CA33");
  ellipse(green1x+330, green1y, 51, 70);
  ellipse(green1x+390, green1y, 51, 90);
  fill("#81AC49");
  ellipse(green1x+400, green2y, 141, 90);
  fill("#B3CA33");
  ellipse(green1x+200, green3y, 31, 130);
    fill("#B3CA33");
  
  ellipse(green1x+400, green2y, 41, 90);
    fill("#B3CA33");
  
  ellipse(green1x+400, green2y, 41, 90);


  fill("#CBCBCB");
  rect(381,525,242,7,17);
  fill("#818181");
  rect(381,529,240,3,17);


  fill("#C32323");
  rect(411,608,44,19,17);
pop();

}