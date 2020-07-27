
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];
var rand2;
var divisionHeight = 300;
//var particle

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(480, 800);

  ground = new Ground(width / 2, height, width, 20);

  for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Division(i, height - divisionHeight / 2));
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
    plinkos.push(new Plinko(j, 175));
  }
}

function draw() {
  background(0);

  Engine.update(engine);

  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 4 - 10, width / 4 + 10), 20, 20));
  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }
  ground.display();
}