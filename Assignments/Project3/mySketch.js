
let tumbler, x, y, sides, len, angle;

let walltop, wallbot, wallleft, wallright, scorezone;
let storeditems = 10;

function setup() {
	new Canvas(700,700);
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
	walltop = new Sprite(x, 100, 500, 20, 'static');
	wallbot = new Sprite(x, height-100, 500, 20, 'static');
	wallleft = new Sprite(100, y, 20, 500, 'static');
	wallright = new Sprite(width-100, y, 20, 500, 'static');
	scorezone = new Sprite(200, y+150, 20, 200, 'static');

	machinecolor = color(random(255), random(255),random(255));
	walltop.color = machinecolor;
	wallbot.color = machinecolor;
	wallleft.color = machinecolor;
	wallright.color = machinecolor;
	scorezone.color = machinecolor
	dropSprite();
	
	strokeJoin('round');
}

function update() {
	background(2);
	
	if (mouse.presses() && mouse.x > 250) dropSprite();
}

function dropSprite() {
	len = (height * random(0.1, 0.3)) / sides;
	let penta = new Sprite(mouse.x || x, mouse.y || y, len, 'pentagon');
	penta.color = '#b7ebff';
}
		
function keyPressed(){
	if (keyCode == 32) {
		for (let i = 0; i < storeditems; i++) {
			dropSprite();
			
		}
	}

}