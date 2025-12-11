let tumbler, x, y, sides, len, angle;

let walltop, wallbot, wallleft, wallright, scorezone;
let storeditems = 0;

let ballstorage = [];
let numball = 0;
let dropstage = 0;

let ballgroup = 0;

function setup() {
	textSize(32);
	//textAlign(CENTER);


  new Canvas(700, 700);
  world.gravity.y = 10;

  x = canvas.hw;
  y = canvas.hh;
  sides = 5;
  len = canvas.h / sides;
  angle = 360 / sides;

  //let s = [len, angle, len, -angle, len, angle, sides];
  //tumbler = new Sprite(x, y, s, 'kinematic');
  //tumbler.rotationSpeed = 0;
  //tumbler.color = '#ff0a52';
  //tumbler.strokeWeight = 16;

  //case for claw
  walltop = new Sprite(x, 100, 500, 20, "static");
  wallbot = new Sprite(x, height - 100, 500, 20, "static");
  wallleft = new Sprite(100, y, 20, 500, "static");
  wallright = new Sprite(width - 100, y, 20, 500, "static");
  scorezone = new Sprite(200, y + 150, 20, 200, "static");

  machinecolor = color(50,50,50);
  walltop.color = machinecolor;
  wallbot.color = machinecolor;
  wallleft.color = machinecolor;
  wallright.color = machinecolor;
  scorezone.color = machinecolor;
  dropSprite();

  clawsprite = new Sprite(200, 200, 25, 100, "kinematic");
  clawsprite.color = "#1dd13bff";

  ufo = new Sprite(clawsprite.pos.x, clawsprite.pos.y, 25, 100, "kinematic");
  ufo.image = 'ufo.png';

  border = new Sprite(350, 350, "none");
  border.scale.x = 1.5;
  border.scale.y = 1.8;
  //border.layer = -1;

  border.image = 'plainborder.png';

  


  strokeJoin("round");
}

function draw() {
  claw();
  ufo.pos.x = clawsprite.pos.x;
  ufo.pos.y = clawsprite.pos.y;

  if (dropstage == 1){
	if (clawsprite.pos.y < 520){
		clawsprite.vel.y = 5;
	} else {
		clawsprite.vel.y = 0;
		dropstage = 2;
	}
  }

  if (dropstage == 2){
	//delayTime(1);
		if (clawsprite.pos.y > 200){
		clawsprite.vel.y = -5;
		} else {
		clawsprite.vel.y = 0;
		dropstage = 3;
	}
  }

  if (dropstage == 3 && keyIsDown(32)){
	    for (let i = 0; i < storeditems; i++) {
      dropSprite();
    }
	dropstage = 0;
  storeditems = 0;
  }

	fill(255);
	text('Stored Prizes: ' + storeditems, 350, 675);
	clawsprite.overlap(ballgroup, clawGrab);

  fill(color(20,20,20));
  rect(50, 75, 200, 550);
}

function clawGrab(clawsprite, penta){
  penta.remove();
	//ballgroup.pos.y = 50;
  storeditems++;
}


function claw() {
	if (clawsprite.pos.x > 100 && clawsprite.pos.x < 600) {
 	 if (keyIsDown(37)) {
 	   //left
  	  clawsprite.vel.x = -5;
  	} else if (keyIsDown(39)) {
 	   //right
  	  clawsprite.vel.x = 5;
  	} else {
  	  clawsprite.vel.x = 0;
  }
} else {
	clawsprite.vel.x = 0;
}
if (clawsprite.pos.x < 101){
	clawsprite.pos.x = 101;
}
if (clawsprite.pos.x > 599){
	clawsprite.pos.x = 599;
}
}



function update() {
  background(2);

  if (mouse.presses() && mouse.x > 250) dropSprite();
}

function dropSprite() {
  if (ballgroup == 0){ 
    ballgroup = new Group();
  }
 

  let temprandom = 1; //random(0.05, 0.09);
  len = (height * temprandom) / sides;
  if (keyIsDown(32)){
	penta = new Sprite(clawsprite.x, clawsprite.y+85, len, "dodecagon");
  } else{
	penta = new Sprite(mouse.x || x, mouse.y || y, len, "dodecagon");
  }
  
  penta.color = "#b7ebff";
  
  ballstorage.push(temprandom * 2);
  penta.d = random(20, 40);
  ballgroup.add(penta);
  numball++;
  //penta.image = 'capsule.png';
  //penta.image.scale = penta.d/50;
}

function keyPressed() {
  if (keyCode == 32 && dropstage == 0) {
	dropstage = 1;
  }
}
