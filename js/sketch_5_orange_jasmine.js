
//the code was created watching the coding train
//https://www.youtube.com/watch?v=7A5tKW9HGoM
//and 
//https://www.youtube.com/watch?v=f5QBExMNB1I
let c = 0;
let x = random(diameter);
let y = random(height);

function setup(){
	createCanvas(1024,768);
}

function draw() {
  noFill();
  frameRate(10)

  // central flower
  stroke(255, 255, 255);
  fill(236,145,169,2)
  circle(250, 200, 100);
  circle(350, 200, 100);

  circle(300, 150, 100);
  circle(300, 250, 100);

  circle(265, 165, 100);
  circle(335, 165, 100);

  circle(265, 235, 100);
  circle(335, 235, 100);

 

  stroke(255, 255, 255);
  fill(236,145,169,2)
  circle(250+200, 200+200, 100+200);
  circle(350+200, 200+200, 100+200);

  circle(300+200, 150+200, 100+200);
  circle(300+200, 250+200, 100+200);

  circle(265+200, 165+200, 100+200);
  circle(335+200, 165+200, 100+200);

  circle(265+200, 235+200, 100+200);
  circle(335+200, 235+200, 100+200);

  stroke(255, 255, 255);
  fill(236,145,169,2)
  circle(250+500, 200+250, 100+100);
  circle(350+500, 200+250, 100+100);

  circle(300+500, 150+250, 100+100);
  circle(300+500, 250+250, 100+100);

  circle(265+500, 165+250, 100+100);
  circle(335+500, 165+250, 100+100);

  circle(265+500, 235+250, 100+100);
  circle(335+500, 235+250, 100+100);

ellipse(mouseX,mouseY,175,175);


}


