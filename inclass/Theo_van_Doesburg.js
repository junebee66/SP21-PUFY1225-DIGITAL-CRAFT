//runs once and setups the scene
function setup(){
	createCanvas(600,600);
}

//runs FOREVER
function draw(){
	var recWidth = 50;
	var recHeight = 100;
	background("black");
	
	noStroke();
	fill("red");
	ellipse(width/2,height/2,100,100);
	
	// rectangle
	stroke(0);
	fill("white");
	rect(0,600 - recHeight,60,100);
	
	noStroke();
	nofill("orange");
	beginShape();
	vertex(-50,500);
	vertex(400,500);
	vertex(80,300);
	endShape(CLOSE);
	
	ellipse(200,200,20,20);
	
	stroke(0);
	fill(200,0,200,50);
	triangle(width/2,100,320,100,310,80);
}

3

