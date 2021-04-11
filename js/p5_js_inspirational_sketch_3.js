//runs once and setups the scene
function setup(){
	createCanvas(570,407);
}

//runs FOREVER
function draw(){
	var recWidth = 50;
	var recHeight = 50;
	background("#ccffff");
	
	//circle red
	stroke(2);
	fill("#ccffcc");
	beginShape();
	//Indian Camp (right)
		vertex(109,160);
		vertex(160,162);
		vertex(159,179);
		vertex(172,180);
		vertex(174,201);
		//(left from bottom to top)
		vertex(156,204);
		vertex(142,200);
		vertex(132,198);
		vertex(123,188);
		vertex(109,182);
		vertex(117,172);
	//curve
		vertex(216,181);
	//forest
		vertex(206,164);
		vertex(208,165);
		vertex(224,157);
		vertex(226,142);
	//Tree
		vertex(220,130);
		vertex(227,124);
		vertex(221,116);
		vertex(220,110);
		vertex(216,103);
		vertex(226,110);
		vertex(235,90);
		vertex(245,92);
		vertex(256,95);
		vertex(265,97);
		vertex(276,120);
		vertex(297,104);
		vertex(300,119);
		vertex(311,119);
		vertex(314,132);
		//shall rouch/taiwan
		vertex(325,141);
		vertex(348,152);
		vertex(345,154);
		vertex(355,163);
		vertex(375,165);
		vertex(388,177);
		vertex(398,175);
		vertex(397,178);
		vertex(403,184);
		//forest2
		vertex(416,186);
		vertex(436,178);
		vertex(456,190);
		vertex(471,190);
		vertex(468,200);
		vertex(465,208);
		vertex(477,210);
		vertex(474,210);
		vertex(481,227);
		vertex(471,224);
		vertex(459,221);
		vertex(452,217);
		vertex(451,209);
		vertex(427,208);//stone
		//mermaid
		vertex(410,218);
		vertex(402,241);
		vertex(409,259);
		vertex(426,266);
		vertex(451,247);
		vertex(464,263);
		vertex(473,259);
		vertex(477,251);
		vertex(493,251);
		//mermaid bottom palm right
		vertex(493,269);
		vertex(501,280);
		vertex(511,286);
		vertex(509,297);
		vertex(494,296);
		vertex(483,307);
		vertex(458,303);
		vertex(440,291);
		vertex(429,288);
		//mermaid left palm trees
		vertex(423,294);
		vertex(428,305);
		vertex(438,313);
		vertex(429,325);
		vertex(426,337);
		vertex(415,343);
		vertex(404,339);
		vertex(388,345);
		vertex(374,348);
		vertex(359,336);
		vertex(339,337);
		vertex(333,322);
		vertex(317,319);
		vertex(314,309);
		vertex(328,309);
		vertex(333,295);
		vertex(331,283);
		vertex(319,265);
		vertex(327,251);
		//mountains
		vertex(327,234);
		vertex(337,217);
		vertex(335,198);
		vertex(327,204);
		vertex(319,227);
		vertex(311,243);
		vertex(303,254);
		//cammilal cove left
		vertex(302,262);
		vertex(285,266);
		vertex(237,270);
		vertex(223,283);
		vertex(222,297);
		vertex(230,310);
		vertex(245,318);
		vertex(254,323);
		//palm trees on the very left
		vertex(240,326);
		vertex(227,323);
		vertex(220,336);
		vertex(207,332);
		vertex(200,320);
		vertex(186,317);
		vertex(180,299);
		vertex(163,292);
		vertex(154,278);
		//connections top and bottom on the very left
		vertex(156,260);
		vertex(161,244);
		vertex(174,248);
		vertex(173,237);
		vertex(161,229);
		vertex(169,222);
		vertex(172,225);
		vertex(156,213);
	endShape(CLOSE);

}


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
