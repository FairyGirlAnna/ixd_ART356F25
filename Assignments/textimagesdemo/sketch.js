let pascal;
let wormimg;
let splatfont;
let showup = -200;

function preload(){
  pascal = loadImage('/images/PascalIsHere.png');
  wormimg = loadImage('/images/SMTWorm.webp');
  splatfont = loadFont('/fonts/Splatoon2.otf');
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(32);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
showup = showup + 5;

  // pascal :)
  if (showup < 2000){
  background(50, 150, 170);
  textFont(splatfont);
  stroke(0,0,50, showup);
  strokeWeight(3);
  fill(100, 100, 255, showup);
  tint(255, showup);
  text("pascal the dog is here", 200, 150);
  image(pascal, 200, 250, 88, 136);
  //filter(BLUR,1);
    if (showup > 1700){
      stroke(100,0,0);
      fill(255, 0, 0);
      text("WORM BARRAGE", 200, 200);
    }
  }

// You've had to much fun. Summon the worms.
  if (showup >= 2000){
    for (let index = 0; index < 3; index++) {
      image(wormimg, random(400), random(400), 50, 50);
    }  
  }
  
//Succumb.
  if (showup > 5000){
    filter(BLUR, 0.1);
    tint(255 - ((showup - 5000)/3), 0, 0);
  }

     
}
