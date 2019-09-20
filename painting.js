function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  //white rect
  fill(240);
  rect(0, 0,100, 170);
  rect(0, 200, 100, 220);
  rect(120, 440, 400, 180);
  rect(540, 440, 80, 65);
  
  //red rect
  fill(255, 0, 0);
  rect(120, 0, 480, 420);
  
  //blue rect
  fill(0, 0, 230);
  rect(0, 440, 100, 160);
  
  //yellow rect
  fill(255, 230, 0);
  rect(540, 530, 80, 80)
}
