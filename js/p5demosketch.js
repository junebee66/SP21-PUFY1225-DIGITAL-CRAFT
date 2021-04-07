//runs once and setups the scene
function setup(){
	createCanvas(600,600);
}

//runs FOREVER
function draw(){
	var recWidth = 50;
	var recHeight = 50;
	background("red");
	noStroke();
	fill("red");
	ellipse(width/2,height/2,100,100);
	stroke(0);
	fill("green");
	rect(width/2,height/2, - recHeight/2,50);
	noStroke();
	fill("blue");
	ellipse(200,200,20,20);
	stroke(0);
	fill(200,0,200,50);
	triangle(width/2,100,320,100,310,80);
}

3

