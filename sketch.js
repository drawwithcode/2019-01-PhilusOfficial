function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noFill();

  frameRate(60);
}

function draw() {
  strokeWeight(3);
  line(width/2+200, height/2, cos(frameCount*3)*200+width/2, sin(frameCount*3)*200+height/2);

  //ellipse(width/2, height/2, 300, 300);

  if(frameCount==120) {noLoop()};
}
