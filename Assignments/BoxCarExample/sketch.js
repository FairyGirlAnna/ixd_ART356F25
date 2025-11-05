let displace = 0;
let displace2 = 0;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  //blue car
  fill(100,150,200);//body
  rect(75+displace,250,250,100);
  
  fill(200,200,255);//windscreen
  rect(250+displace,250,75,50);

  fill(100,100,100);//wheels
  circle(125+displace,350,50);
  circle(275+displace,350,50);
  displace = displace + 5;
  if (displace >= 400){
    displace = -400;
  }
  
  //red car
  
  
  fill(255,100,100);//body
  rect(75+displace2,50,250,100);
  
  fill(200,200,255);//windscreen
  rect(250+displace2,50,75,50);
  
  fill(100,100,100);//wheels
  circle(125+displace2,150,50);
  circle(275+displace2,150,50);
  displace2 = displace2 + 3;
  if (displace2 >= 450){
    displace2 = -400;
  }
  
  
  
  
}