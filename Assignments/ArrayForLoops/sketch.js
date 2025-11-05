function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(5);
  let button = createButton('help');
  button.position(0,100);
}

function draw() {
  background(220);
  rect(200,0,random(100));
  rect(200,100,random(100));
  rect(200,200,random(100));
  rect(200,300,random(100));
  rect(200,400,random(100));
}
