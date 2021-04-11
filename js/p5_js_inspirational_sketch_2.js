//runs once and setups the scene
function setup(){
	createCanvas(1600,1222);
}

//runs FOREVER
function draw(){
	var recWidth = 50;
	var recHeight = 50;
	background("#eefad6");

	//site
	fill('#ade38d')
	beginShape()
	vertex(381,208);
	vertex(1208,157);
	vertex(1250,1026);
	vertex(380,974);
	vertex(381,208);
	endShape()
	
	//big circle
	stroke('#ffffff');
	strokeWeight(15);
	noFill();
	ellipse(784,629,721,652);

	stroke('#ffffff');
	strokeWeight(15);
	noFill();
	ellipse(784,629,555,555);

	//red straight 90
	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(909,506,87,90);

	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(869,585,51,50);

	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(791,429,51,50);

	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(752,467,51,50);

	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(790,702,51,50);

	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(771,839,51,50);
		
		//long short
		stroke('#000000');
		strokeWeight(2);
		fill("white");
		rect(672,625,49,24);	

		stroke('#000000');
		strokeWeight(2);
		fill("white");
		rect(830,625,49,24);

	//green titlt right
	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(1011,522,49,24);

	stroke('#000000');
	strokeWeight(2);
	fill("white");
	rect(_,_,37,33);

}



