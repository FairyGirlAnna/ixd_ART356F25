let displace = 0;
let displace2 = 0;
let carobj = {color:0, x:200, y:250, speed:4};
let cargenerator;
let height = 250;

function setup() {
  createCanvas(400, 600);
  
  cargenerator = new car();
}

function draw() {
  background(220);

  for (let index = 0; index < 5; index++) {
    
  };

  cargenerator.show();
  cargenerator.drive();
 
  
  //new car
  carobj.color = color(0,200,0);
  fill(carobj.color);
  rect(carobj.x, carobj.y, 250, 100);
  carobj.x = carobj.x + carobj.speed;
  if (carobj.x >= 400){
    carobj.x = -250;
  };

}
  //car class
  class car{
    constructor(){
      this.color=color(random(255),random(255),random(255));
      this.x=random(400); 
      this.y=random(height); 
      this.speed=random(5);
    }
    show(){
      fill(this.color);
      rect(this.x, this.y, 250, 100);
    }
    drive(){
      this.x = this.x + this.speed;
      if (this.x >= 400){
        this.x = -250;
      };
    }
    
  }





  // //blue car
  // fill(100,150,200);//body
  // rect(75+displace,250,250,100);
  
  // fill(200,200,255);//windscreen
  // rect(250+displace,250,75,50);

  // fill(100,100,100);//wheels
  // circle(125+displace,350,50);
  // circle(275+displace,350,50);
  // displace = displace + 5;
  // if (displace >= 400){
  //   displace = -400;
  // }
  
  // //red car
  // fill(255,100,100);//body
  // rect(75+displace2,50,250,100);
  
  // fill(200,200,255);//windscreen
  // rect(250+displace2,50,75,50);
  
  // fill(100,100,100);//wheels
  // circle(125+displace2,150,50);
  // circle(275+displace2,150,50);
  // displace2 = displace2 + 3;
  // if (displace2 >= 450){
  //   displace2 = -400;
  // }
  
  
  
  
