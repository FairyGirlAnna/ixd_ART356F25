function setup() {
  createCanvas(255, 255);
  frameRate(60);
}

function draw() {
  background(20);
  fill(100);
  stroke(200);
  strokeWeight(4);
  
  for (let xindex = 0; xindex < width; xindex++){
    for (let yindex = 0; yindex < height; yindex++){
      stroke(xindex,yindex,random(255));
      point(xindex,yindex);
    } 
  }
  
}