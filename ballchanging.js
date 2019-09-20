function setup() {
  createCanvas(400, 400);
}

var ballX = 0;
var ballY = 0;
var ballS = 50;
var ballspeedX = 2;
var ballspeedY = 3;
var ballsize = 2
var colorx = 50

function draw() {
  background(225);
  
  fill(colorx, 220, 220);
  noStroke();
  ellipse(ballX, ballY, ballS);
  
  ballX = ballX + ballspeedX;
  ballY = ballY + ballspeedY;
  ballS = ballS + ballsize;
  
  fill(255, 220, 0);
  noStroke();
  ellipse(mouseX, mouseY, mouseX * mouseY / 100);
  
  if (ballX >= 400) { 
    ballspeedX = -2;
  }
  
  if (ballY >= 400) { 
    ballspeedY = -3;
  }
  
  if (ballS >= 150) { 
    ballsize = -2;
  }
  
  if (ballX <= 0) { 
    ballspeedX = 2;
  }
  
  if (ballY <= 0) { 
    ballspeedY = 3;
  }
  
  if (ballS <= 50) { 
    ballsize = 2;
  }
  
  if (ballX <= 400) {
    colorx = 150;
  }
    
  if (ballX <= 200) {
    colorx = 50;
  }
}
