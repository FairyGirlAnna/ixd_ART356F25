
let tumbler, x, y, sides, len, angle;

function setup() {
	new Canvas('1:1');
	world.gravity.y = 10;

	x = canvas.hw;
	y = canvas.hh;
	sides = 5;
	len = canvas.h / sides;
	angle = 360 / sides;

	let s = [len, angle, len, -angle, len, angle, sides];
	tumbler = new Sprite(x, y, s, 'kinematic');
	tumbler.rotationSpeed = 0.5;
	tumbler.color = '#ff0a52';
	tumbler.strokeWeight = 16;
	
	dropSprite();
	
	strokeJoin('round');
}

function update() {
	background(0);
	
	if (mouse.presses()) dropSprite();
}

function dropSprite() {
	len = (height * random(0.1, 0.3)) / sides;
	let penta = new Sprite(mouse.x || x, mouse.y || y, len, 'pentagon');
	penta.color = '#b7ebff';
}
		