//The four topics included in this project are:
//1. Random: was replaced by noise
//2. functions: I show, hide, and stop buttons
//3. value: slider and name values to control the drawing
//4. variable: the noise "t" is most significant variable in here that make everything look smooth
//5. loop: the drawing loop on its own and stop when the noLoop function is activated.
//5. logics: initally, the drawings was stop by framecount logic but then I decide that the user should control it by themsleves

let t; //niose variable

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0); //filling the whole screen as canvas
  canvas.style('z-index','-1'); //making the animations be the background
  
  background(0);
  t = 0;
  //hide and show effect to sperate the visuals as two pages on the website.
  buttonH = createButton("Result"); 
  buttonH.mousePressed(hide);

  buttonS = createButton("Redraw");
  buttonS.mousePressed(show);

  btnStop = createButton("stop");
  btnStop.mousePressed(stop);
}

//the hide function doesn't loop
//it just show the text and hide all the sliders and inputs page
function hide(){
  buttonH.html("Change Color");
  buttonS.html("Retry");
  //hiding all the sliders and inputs
  document.getElementById("all").style.visibility = "hidden";
  //using noise to make the blob to moving gradually instead of abrubtly.
  let r = 360 * noise(t+50);
  let g = 360 * noise(t+15);
  let b = 360 * noise(t+20);
  let name = document.getElementById('name').value;
  t = t + 0.01;
  //draw all the text on the result page
  background(0, 10);//the 10 is the alpha transparency that helps the name typed in the input to only show the very last version, meaning if it is -1 or less than 5, all the deleted text typed in the input section will show and overlap onto each other.
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
  //the desire value controls the thickness of the dawing brush/circle's width and height
  let w = document.getElementById('desire').value * noise(t+10);
  let h = document.getElementById('desire').value * noise(t+10);
  //the mood value controls the vibrant/saturation level of the color
  let r = document.getElementById('feel').value * noise(t+50);//the 50,15, and 20 is just what I test out to be the best looking color scheme
  let g = document.getElementById('feel').value * noise(t+15);
  let b = document.getElementById('feel').value * noise(t+20);
  let confidence = document.getElementById('confidence').value;
  let feel = document.getElementById('feel').value;
  
  //the confidece level controls the alpha transparency of background
  background(0, confidence*noise(t));//making the confidence value times niose will help the opacity(which is also the viscous level of the background. How much does the past drawing/circles stick onto the background)
  noStroke();
  fill(r, g, b,);
  ellipse(x+300, y, w, h);//initially I made the canvas 2/3 of the windowWidth, but then I have to put the text, so I change it back to full width. This cause me have to add 300 to the x of the brush so it doesn't draw over the sliders panel of the left.

  t = t + 0.01;

  // if(frameCount===500){
  //   noLoop();
  // }
}

//initially I make it stop using frame counts however, I later fgured that I want my user to stop it by themselves so made this function after draw.
function stop(){
  noLoop();
}

//show the sliders panel and clear the drawings
function show(){
  loop();
  clear();
  document.getElementById("all").style.visibility = "visible";
  buttonH.html("Result");
  buttonS.html("Redraw");
}





