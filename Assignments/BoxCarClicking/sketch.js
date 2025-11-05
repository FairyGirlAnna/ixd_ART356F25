let cars = [];
let car;
let c;
let carcount = 99;

function setup() {
  createCanvas(400, 400);

  //spawns on setup start
  // for (let i = 0; i < 2; i++) {
  //   let y = 10 + 50 * i;
  //   cars[i] = new Car(
  //     color(random(255), random(255), random(255)),
  //     0,
  //     y,
  //     random(5)
  //   );
  // }

for (let i = 0; i < carcount; i++) {
  let y = random(height);
  let c = new Car(color(random(220)+25, 25, 25), 0, y, random(3)+1.5); 
  cars.push(c);
}



}

// can be used to spawn on mousePressed()
// function mousePressed() {
//   let y = random(height);

//   let c = new Car(
//     color(random(255), random(255), random(255)),
//     0,
//     y,
//     random(5)
//   );

//   cars.push(c);
// }

function draw() {
  background(200);

  for (let i = 0; i < cars.length; i++) {
    cars[i].drive();
    cars[i].display();
  }

}

function mousePressed(){
  for (let i = 0; i < cars.length; i++) {
    cars[i].click(mouseX, mouseY);
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

  display() {
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(this.xpos, this.ypos, 50, 25);
  }

  click(px, py){
    // let d = dist(this.xpos, this.ypos, mouseX, mouseY);
    // if (d<25){
    //   console.log("Hog")
    // }

    let halfW = 50/2;
    let halfH = 25/2;

    if (abs(px - this.xpos) < halfW + 5 &&
       abs(py - this.ypos) < halfH + 5){
      console.log("Oh yeah. Hog time.")
    }

  }


  drive() {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width+50) {
      this.xpos = -50;
    }
  }
}
