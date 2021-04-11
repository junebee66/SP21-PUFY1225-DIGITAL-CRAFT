//runs once and setups the scene
function setup(){
	createCanvas(1024,683);
}

//runs FOREVER
function draw(){
	var recWidth = 50;
	var recHeight = 50;
	background("#FFFFFF");
	
	stroke('#295999');
	strokeWeight(10);
	fill("white");
	rect(57,57,878,517);

	//land
	strokeWeight(3);
	fill("#295999");
	beginShape();
	vertex(397,300);
	vertex(426,322);
	vertex(441,320);
	vertex(458,312);
	vertex(467,284);
	vertex(480,271);
	vertex(508,270);
	vertex(520,278);
	vertex(535,279);
	vertex(557,290);
	vertex(568,290);
	vertex(572,311);
	vertex(567,330);
	vertex(581,340);
	vertex(583,360);
	vertex(579,384);
	vertex(571,397);
	vertex(566,410);
	vertex(556,421);
	vertex(528,430);
	vertex(502,428);
	vertex(509,411);
	vertex(501,400);
	vertex(498,406);
	vertex(480,402);
	vertex(466,402);
	vertex(451,403);
	vertex(432,392);
	vertex(427,365);
	vertex(415,368);
	vertex(420,344);
	vertex(419,329);
	vertex(408,329);
	vertex(408,318);

	endShape(CLOSE);

}

//referenced from W3schools
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


