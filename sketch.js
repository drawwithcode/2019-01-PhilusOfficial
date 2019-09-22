function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("black");

  frameRate(60);
}

function draw() {

  translate(width/2, height/2);
  strokeWeight(2);

  if (frameCount<120) {
    stroke(255);
    line(300, 0, cos(frameCount*3)*300, sin(frameCount*3)*300);
    line(-300, 0, -cos(frameCount*3)*300, -sin(frameCount*3)*300);
  }

  else if(frameCount>120 && frameCount<240)  {
    stroke(0);
    strokeWeight(5);
    line(300, 0, cos(frameCount*3)*300, sin(frameCount*3)*300);
    line(-300, 0, -cos(frameCount*3)*300, -sin(frameCount*3)*300);
  }

  else if(frameCount>240 && frameCount<301)  {
    stroke(250, 0, 80);
    strokeWeight(2);
    line(300, 0, cos(frameCount*3)*300, sin(frameCount*3)*300);
    line(-300, 0, -cos(frameCount*3)*300, sin(frameCount*3)*300);
  }

  else if(frameCount>300 && frameCount<361)  {
    stroke(250, 170, 0);
    line(150, 0, cos(frameCount*3)*150, sin(frameCount*3)*150);
    line(-150, 0, -cos(frameCount*3)*150, sin(frameCount*3)*150);
  }

  else if(frameCount>360 && frameCount<520)  {
    stroke(0, 217, 250);
    line((310-frameCount)*3, (frameCount-300)*3-182, (frameCount-310)*3, (frameCount-300)*3-182);
  }

  else if(frameCount>520 && frameCount<670)  {
    stroke("black");
    fill("black");
    rect(-200, frameCount-520-450, 400, 300);
  }

  else if(frameCount>670)  {
    stroke(0,(frameCount-670)*5/100);
    fill(0,(frameCount-670)*5/100);
    rect(-width/2, -height/2, width, height);
  }


}
