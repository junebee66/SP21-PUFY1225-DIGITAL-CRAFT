
//this sketch is created watching the coding train https://www.youtube.com/watch?v=9mucjcrhFcM
//and some references cat's pictures online
//i was initally trying to draw weather icons. 
//That's why the file is names weather icons. 
//However, it all the curve lines were a bit difficult for me, so I decided to draw a cat.

function setup(){
	createCanvas(626,626);
}

function draw() {
  fill("#000000");
  strokeWeight(2);
  stroke("white")

  //tail
  triangle(280, 280, 350, 150, 390, 170);

  //leftbackpaws
  ellipse(190, 280, 40, 30);

  //body
  ellipse(230, 210, 130, 150);

  //backleg
  ellipse(270, 260, 70, 80);

  //rightbackpaws
  ellipse(250, 290, 40, 30);

  //leftear
  triangle(160, 45, 200, 65, 175, 95);

  //rightear
  triangle(280, 45, 240, 65, 265, 95);

  //head
  ellipse(220, 110, 100, 100);

  //spot
  ellipse(200, 100, 30, 30);
  ellipse(240, 100, 30, 30);

  //nose
  fill("black");
  triangle(210, 120, 230, 120, 220, 130);

  //eyes
  ellipse(200, 100, 10, 10);
  ellipse(240, 100, 10, 10);

  stroke("black");
  //left lines
  line(180, 120, 140, 120);
  line(190, 130, 150, 140);

  //rightlines
  line(260, 120, 300, 120);
  line(250, 130, 290, 140);

  //spots
  fill("white");
  noStroke();
  ellipse(250, 300, 10, 10);
  ellipse(240, 180, 30, 30);
  ellipse(200, 200, 10, 10);

//cloud
  fill("85C5FF")
  circle (500,500,15);
}