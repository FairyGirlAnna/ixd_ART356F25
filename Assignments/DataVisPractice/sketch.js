let x = 0;


function setup(){
  createCanvas(600,600);
  background(20);
  textAlign(CENTER, CENTER);
  spacepeople = loadJSON("http://api.open-notify.org/astros.json", gotData);
}

function gotData(data){
  console.log(data)
}

function draw(){
  textSize(24);
  stroke(0);
  strokeWeight(1);


  line(x, 0,x, height);
  x++;
  if (x > width){
    x = 0;
  }
  stroke(255);

  if (spacepeople){
    for (let i = 0; i < spacepeople.number; i++) {
      fill(255);
      text(spacepeople.people[i].name, 200, (50 * i) + 25);
      text(spacepeople.people[i].craft, 500, (50 * i) + 25);
      noStroke();
      fill(30);
      ellipse(random(width), random(height), 15, 15);
    }
  }
}