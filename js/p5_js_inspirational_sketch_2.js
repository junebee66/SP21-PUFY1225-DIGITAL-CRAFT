//runs once and setups the scene

function setup(){
	createCanvas(1600,1222);

}

//runs FOREVER
function draw(){
	var recWidth = 50;
	var recHeight = 50;
	let angle = 0;
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

	stroke('#000000');
	strokeWeight(1);
	noFill();
	ellipse(784,629,565,565);

	stroke('#000000');
	strokeWeight(1);
	noFill();
	ellipse(784,629,540,540);

	stroke('#000000');
	strokeWeight(1);
	noFill();
	ellipse(784,629,730,665);

	stroke('#000000');
	strokeWeight(1);
	noFill();
	ellipse(784,629,710,640);

	stroke('#FFFFFF');
	strokeWeight(71);
	noFill();
	line(0,984,1597,1104);

	stroke('#FFFFFF');
	strokeWeight(71);
	noFill();
	line(1310,1221,1248,0);

	stroke('#FFFFFF');
	strokeWeight(71);
	noFill();
	line(0,200,1598,70);

	//red straight 90
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(909,506,87,90);

	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(869,585,51,50);

	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(791,429,51,50);

	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(752,467,51,50);

	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(790,702,51,50);

	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(771,839,51,50);
		
		//long short
		stroke('#000000');
		strokeWeight(1);
		fill("white");
		rect(672,625,49,24);	

		stroke('#000000');
		strokeWeight(1);
		fill("white");
		rect(830,625,49,24);
	

	//green titlt right
	push();//meaning save, technically like a div in html
	translate(1012, 525);//moving origin
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);//first two digits help setting the position from that "origin"
	pop();//meaning restore, "closing the div"

	push();
	translate(968,644);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(913,426);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(853,407);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(793,507);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(812,603);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(716,509);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(736,603);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(657,406);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(600,506);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(638,624);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,75);
	pop();

	push();
	translate(641,778);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(696,838);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(911,818);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(931,761);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,33,33);
	pop();

	push();
	translate(915,622);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,66,33);
	pop();

	push();
	translate(756,702);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(657,484);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

//tilt right yellow
	push();
	translate(1007,665);
	rotate(60);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,30,70);
	pop();

	push();
	translate(719,517);
	rotate(60);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(643,635);
	rotate(60);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(698,811);
	rotate(60);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(853,799);
	rotate(45);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

//blue left tilt
	push();
	translate(918,515);
	rotate(46.7);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(879,593);
	rotate(46.7);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(739,612);
	rotate(46.7);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(605,673);
	rotate(46.7);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,40,60);
	pop();

	push();
	translate(781,848);
	rotate(46.7);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();

	push();
	translate(918,792);
	rotate(46.7);
	stroke('#000000');
	strokeWeight(1);
	fill("white");
	rect(0,0,70,70);
	pop();
}



function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}















