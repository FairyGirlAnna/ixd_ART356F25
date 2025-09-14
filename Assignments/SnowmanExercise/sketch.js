//size and position variables
let topballsize = 200;
let topballpos = 100;
let midballsize = 200;
let midballpos = 300;
let botballsize = 200;
let botballpos = 500;

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


function setup() {
  //creating canvas, centering it on page
  //made with reference from: https://editor.p5js.org/jm8785/sketches/r0DMO5Mqj
  createCanvas(600, 600);
  // cnv=createCanvas(600,600);
  // let newCanvasX = (windowWidth- 600)/2;
  // let newCanvasY = 50;
  // cnv.position(newCanvasX,newCanvasY);
  frameRate(10);

//the preloaderrrr
  face1 = loadImage("./images/snowface1.png?raw=true");
  face2 = loadImage("./images/snowface2.png?raw=true");
  face3 = loadImage("./images/snowface3.png?raw=true");
  bod1 = loadImage("./images/snowbod1.png?raw=true");
  bod2 = loadImage("./images/snowbod2.png?raw=true");
  bod3 = loadImage("./images/snowbod3.png?raw=true");
  imageMode(CENTER);
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
  fill(200,200,200);
  rect(0,500,600,100);
  fill('white');

//snowfall loosely inspired by https://editor.p5js.org/ismanfromes/sketches/l1MzYtqDG


//show the snowballs
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
  
  if (keyIsDown(65)){
    switchfaces++;
    if (switchfaces > 3){
      switchfaces = 1;
    }
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

if (keyIsDown(83)){
  switchbod++;
  if (switchbod > 3){
    switchbod = 1;
  }
}

//shrinking the top
if (keyIsDown(90)){
  topballsize = topballsize-50;
  if (topballsize < 50){
    topballsize = topballsize + 200;
  }
}

//shrinking the middle
  if (keyIsDown(88)){
    midballsize = midballsize-50;
    if (midballsize < 50){
      midballsize = midballsize + 200;
    }
  }

//shrinking the bottom
if (keyIsDown(67)){
  botballsize = botballsize-50;
  if (botballsize < 50){
    botballsize = botballsize + 200;
  }
}
  
//adjusting pos for shrink
//this code functioning is an act of god. 
//do not disturb god's will.
botballpos = (1200 - botballsize)/2;
midballpos = ((botballpos-100) - (botballsize/2)) -(midballsize/2 - 100);
topballpos = ((midballpos-100) - (midballsize/2)) - (topballsize/2 - 100);
}
