//The four topics included in this project are:
//1. random()-
//2. functions-
//3. logics-
//4. loop/array
//5. value


let t; //niose variable

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  // canvas = createCanvas(windowWidth/1.5,windowHeight);
  canvas.position(0,0); //filling the whole screen as canvas
  // canvas.position(windowWidth/3,0);
  canvas.style('z-index','-1'); //making the animations be the background
  
  background(0);
  t = 0;
  //hide and show effect to make the wesite seem to have two pages.
  buttonH = createButton("Result"); 
  buttonH.mousePressed(hide);

  buttonS = createButton("Redraw");
  buttonS.mousePressed(show);

  btnStop = createButton("stop");
  btnStop.mousePressed(stop);
}

function hide(){
  buttonH.html("Change Color");
  buttonS.html("Retry");
  document.getElementById("all").style.visibility = "hidden";
  let r = 360 * noise(t+50);
  let g = 360 * noise(t+15);
  let b = 360 * noise(t+20);
  let name = document.getElementById('name').value;
  t = t + 0.01;
  background(0, 10);
  fill(r, g, b);
  textSize(300);
  text("Hey,",0,200);
  text(name,0,500);
  textSize(100);
  text("I think you should...",0,800);
}


function draw() {
  let x = width * noise(t);
  let y = height * noise(t+50);
  let w = document.getElementById('desire').value * noise(t+10);
  let h = document.getElementById('desire').value * noise(t+10);
  let r = document.getElementById('feel').value * noise(t+50);
  let g = document.getElementById('feel').value * noise(t+15);
  let b = document.getElementById('feel').value * noise(t+20);
  let confidence = document.getElementById('confidence').value;
  let feel = document.getElementById('feel').value;
  let z= -1;
  
  background(0, confidence*noise(t));
  noStroke();
  fill(r, g, b,);
  ellipse(x+300, y, w, h);

  t = t + 0.01;
}


function stop(){
  noLoop();
}

function show(){
  loop();
  clear();
  document.getElementById("all").style.visibility = "visible";
  buttonH.html("Result");
  buttonS.html("Redraw");
}





