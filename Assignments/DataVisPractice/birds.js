//let flower;
let familyY = 50;

function preload(){
//  flower = loadJSON("flower.json");
  data = loadJSON("birds_antarctica.json");
}

function setup() {
  createCanvas(600, 700);
  textAlign(CENTER,CENTER);
  background(70, 250, 150);
}

function draw() {

  //let bird = data.birds[1].members[1];
  //fill(color(flower.r,flower.g,flower.b));
  //text(flower.name, 300, 200);
  //image(flower.img,50,50,50,50);
  textSize(16);
  text("check out these birds:", 100, 50)
  for (let i = 0; i < data.birds.length; i++) {
    textSize(24);
    fill(0);
    text(data.birds[i].family, 300, (familyY));

    let members = data.birds[i].members;
    let memberY = familyY + 50;

    for (let j = 0; j < members.length; j++) {
      textSize(16);
      fill(0);
      text(members[j], 300, (memberY));
      memberY+=20;
    }

    familyY = max(familyY + 30, memberY) + 40;

  }

 
}
