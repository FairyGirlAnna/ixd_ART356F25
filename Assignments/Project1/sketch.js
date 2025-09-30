//size and position variables
let topballsize = 200;
let topballpos = 100;
let midballsize = 200;
let midballpos = 300;
let botballsize = 200;
let botballpos = 500;
let randomgroundr = 200;
let randomgroundg = 200;
let randomgroundb = 200;

let triggerfaceswitch = 0;
let triggerbodyswitch = 0;
let triggertsizeswitch = 0;
let triggermsizeswitch = 0;
let triggerbsizeswitch = 0;
let randomtheground = 0;

//images
let face1;
let face2;
let face3;
let switchfaces = 1;
let bod1;
let bod2;
let bod3;
let switchbod = 1;
let snowwait = 100;
let randomsnowx = [];
let randomsnowy = [];
let randomsnowsize = [];
let font;

function preload(){
  //the preloaderrrr
  face1 = loadImage("https://fairygirlanna.github.io/ixd_ART356F25/Assignments/SnowmanExercise/images/snowface1.png");
  face2 = loadImage("https://fairygirlanna.github.io/ixd_ART356F25/Assignments/SnowmanExercise/images/snowface2.png");
  face3 = loadImage("https://fairygirlanna.github.io/ixd_ART356F25/Assignments/SnowmanExercise/images/snowface3.png");
  bod1 = loadImage("https://fairygirlanna.github.io/ixd_ART356F25/Assignments/SnowmanExercise/images/snowbod1.png");
  bod2 = loadImage("https://fairygirlanna.github.io/ixd_ART356F25/Assignments/SnowmanExercise/images/snowbod2.png");
  bod3 = loadImage("https://fairygirlanna.github.io/ixd_ART356F25/Assignments/SnowmanExercise/images/snowbod3.png");
  font = loadFont("Splatfont2.ttf")
}


function setup() {
  //creating canvas, centering it on page
  //made with reference from: https://editor.p5js.org/jm8785/sketches/r0DMO5Mqj
  createCanvas(600, 600);
  // cnv=createCanvas(600,600);
  // let newCanvasX = (windowWidth- 600)/2;
  // let newCanvasY = 50;
  // cnv.position(newCanvasX,newCanvasY);
  frameRate(10);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(24);
}

function letitsnow(){
  randomsnowx.length = 0;
  randomsnowy.length = 0;
  randomsnowsize.length = 0;

  for (let index = 0; index < 100; index++) {
    randomsnowx.push(random(width));
    randomsnowy.push(random(height));
    randomsnowsize.push(random(5,15));
  }
}

function letitdisplay(){
  for (let index = 0; index < 100; index++) {
    circle(randomsnowx[index], randomsnowy[index], randomsnowsize[index]);

  }
}

function draw() {
  background(100,150,200);

  if (snowwait > 3){
   letitsnow();
   snowwait = 0;
  }
  snowwait++;
  letitdisplay();

//background detailing
  fill(randomgroundr,randomgroundg,randomgroundb);
  rect(300,550,600,100);
  fill('white');

//randomizing the ground color
  if (randomtheground == 1){
    randomgroundr = (random(0,200) / 2) + (randomgroundg / 2);
    randomgroundg = random(150,255);
    randomgroundb = random(0,200);
    randomtheground = 0;
  }


//snowfall loosely inspired by https://editor.p5js.org/ismanfromes/sketches/l1MzYtqDG


//show the snowman showballs
  circle(300,topballpos,topballsize);
  circle(300,midballpos,midballsize);
  circle(300,botballpos,botballsize);

//face picker
  if (switchfaces === 1){
    image(face1, 300, topballpos, topballsize, topballsize);
  }
  if (switchfaces === 2){
    image(face2, 300, topballpos, topballsize, topballsize);
  }
  if (switchfaces === 3){
  image(face3, 300, topballpos, topballsize, topballsize);
  }
  
  if (keyIsDown(65) || triggerfaceswitch == 1){
    switchfaces = int(random(1,4));
    triggerfaceswitch = 0;
  }

//bod picker
if (switchbod === 1){
  image(bod1, 300, midballpos, midballsize*2, midballsize);
}
if (switchbod === 2){
  image(bod2, 300, midballpos, midballsize*2, midballsize);
}
if (switchbod === 3){
image(bod3, 300, midballpos, midballsize*2, midballsize);
}

if (keyIsDown(83) || triggerbodyswitch == 1){
  switchbod = int(random(1,4));
  triggerbodyswitch = 0;
}

//shrinking the top
if (keyIsDown(90) || triggertsizeswitch == 1){
  topballsize = topballsize-50;
  if (topballsize < 50){
    topballsize = topballsize + 200;
  }
    triggertsizeswitch = 0;
}

//shrinking the middle
  if (keyIsDown(88)|| triggermsizeswitch == 1){
    midballsize = midballsize-50;
    if (midballsize < 50){
      midballsize = midballsize + 200;
    }
      triggermsizeswitch = 0;
  }

//shrinking the bottom
if (keyIsDown(67)|| triggerbsizeswitch == 1){
  botballsize = botballsize-50;
  if (botballsize < 50){
    botballsize = botballsize + 200;
  }
    triggerbsizeswitch = 0;
}
  
//adjusting pos for shrink
//this code functioning is an act of god. 
//do not disturb god's will.
botballpos = (1200 - botballsize)/2;
midballpos = ((botballpos-100) - (botballsize/2)) -(midballsize/2 - 100);
topballpos = ((midballpos-100) - (midballsize/2)) - (topballsize/2 - 100);


//buttons you can push
    fill(200,150,50);
  rect(75,75,75,75,15);
  rect(75,175,75,75,15);
  rect(75,275,75,75,15);
  rect(525,75,75,75,15);
  rect(525,175,75,75,15);
  rect(525,275,75,75,15);
    fill(0);

  text('Top', 75, 75);
  text('Middle', 75, 175);
  text('Bottom', 75, 275);
  text('Face', 525, 75);
  text('Chest', 525, 175);
  text('Ground', 525, 275);
    fill(255);
}

//trying to keep thhings simple makes it harder. this handles clicking on buttons
function mousePressed() {
  if (30 < mouseX && mouseX < 120){
    if (30 < mouseY && mouseY < 120){
      triggertsizeswitch = 1;
      //console.log('top left')
    }
    if (130 < mouseY && mouseY < 220){
      triggermsizeswitch = 1;
      //console.log('mid left')
    }
    if (230 < mouseY && mouseY < 320){
      triggerbsizeswitch = 1;
      //console.log('bot left')
    }
  } else if (485 < mouseX && mouseX < 570){
    if (30 < mouseY && mouseY < 120){
      triggerfaceswitch = 1;
      //console.log('top right')
    }
    if (130 < mouseY && mouseY < 220){
      triggerbodyswitch = 1;
      //console.log('mid right')
    }
    if (230 < mouseY && mouseY < 320){
      randomtheground = 1;
      //console.log('bot right')
    }
  }
  //console.log('okay you clickin')
}
