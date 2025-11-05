//https://processing.org/tutorials/objects 

let myCar1;
let myCar2; // Two objects!
let allthecars = [];
let carcount = 500;
let splatfont;
let randomcarheight = [];
let randomcarwidth = [];
let showup = 0;
let unlock = 0;

function setup() {
  createCanvas(600, 600);
  textSize(32);
  textAlign(CENTER);
  // Parameters go inside the parentheses when the object is constructed.
  for (let index = 0; index < carcount; index++) {
   allthecars[index] = new Car(color(random(200)+55, random(25), random(25)), random(width), random(height), random(0.5,1.5));
  }
  splatfont = loadFont('/Splatoon2.otf');
  textFont(splatfont);
}

function draw() {
  background(0);

  for (let index = 0; index < carcount; index++) {
    allthecars[index].drive();
    allthecars[index].display(index);
    randomcarheight.push(random(15,25));randomcarwidth.push(random(40,60));
  }

 showup+=5;

  if (unlock == 1 || showup>2000){
    strokeWeight(2);
    stroke(20);
    fill(255, showup-2000);
    tint(255, showup-2000);
    text("Well, there is a man here.", (width/2), (height-50));
    strokeWeight(0);
}
  strokeWeight(0);

}

function mouseClicked(){
  unlock = 1;
  showup = 2000;
}

function keyPressed(){
  if (keyCode == UP_ARROW) {
    
    carcount += 100;
    allthecars.length += 100;
    
  }

}

// Even though there are multiple objects, we still only need one class.
// No matter how many cookies we make, only one cookie cutter is needed.
class Car {
  constructor(tempC, tempXpos, tempYpos, tempXspeed) {
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.xspeed = tempXspeed;
  }

 //dude is a variable that gets randomized only once in the for loop, also known as randomcarheight & randomcarwidth
  display(dude) {
    noStroke;
    fill(this.c);
    rectMode(CENTER);
    rect(this.xpos, this.ypos, randomcarwidth[dude], randomcarheight[dude]);
  }

  drive() {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width+50) {
      this.xpos = -50;
    }
  }

  
}
