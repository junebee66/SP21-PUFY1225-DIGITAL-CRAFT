
function setup(){
	createCanvas(1024,768);


function draw(){
	var green1x = 100;
	var green1y = 470;
	var green2y = 470;
	background("#fbf8e5");
	noStroke();


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

	//greens
	fill("#81AC49");
	ellipse(green1x+50, green1y-50, 181, 200);
	ellipse(green1x+150, green1y-50, 181, 200);
	ellipse(green1x+250, green1y-50, 181, 200);
	ellipse(green1x+350, green1y-50, 181, 200);
	ellipse(green1x+450, green1y-50, 181, 200);
	ellipse(green1x+550, green1y-50, 181, 200);
	ellipse(green1x+650, green1y-50, 181, 200);
	ellipse(green1x+750, green1y-50, 181, 200);

	fill("#B3CA33");
	ellipse(green1x+50, green1y-50, 181, 150);
	ellipse(green1x+150, green1y-50, 181, 150);
	ellipse(green1x+250, green1y-50, 181, 150);
	ellipse(green1x+350, green1y-50, 181, 150);
	ellipse(green1x+450, green1y-50, 181, 150);
	ellipse(green1x+550, green1y-50, 181, 150);
	ellipse(green1x+650, green1y-50, 181, 150);
	ellipse(green1x+750, green1y-50, 181, 150);



	fill("#93C75A");
	ellipse(100, green1y, 81, 105);
	ellipse(green1x+50, green1y, 81, 105);
	ellipse(green1x+100, green1y, 81, 105);
	ellipse(green1x+150, green1y, 81, 105);
	ellipse(green1x+200, green1y, 81, 105);
	ellipse(green1x+250, green1y, 81, 105);
	ellipse(green1x+300, green1y, 81, 105);
	ellipse(green1x+350, green1y, 81, 105);
	ellipse(green1x+400, green1y, 81, 105);
	ellipse(green1x+450, green1y, 81, 105);
	ellipse(green1x+500, green1y, 81, 105);
	ellipse(green1x+550, green1y, 81, 105);
	ellipse(green1x+600, green1y, 81, 105);
	ellipse(green1x+650, green1y, 81, 105);
	ellipse(green1x+700, green1y, 81, 105);
	ellipse(green1x+750, green1y, 81, 105);
	ellipse(green1x+800, green1y, 81, 105);
	


	fill("#C32323");
	rect(411,608,44,19,17);

}



