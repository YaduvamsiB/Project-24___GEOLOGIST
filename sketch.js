const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;

var ground;

var sand1, sand2, sand3, sand4, sand5, sand6, sand7;

var rubber;

var stone;

var hammer;

function preload() {}

function setup() {
  createCanvas(700, 400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(350, 390, 700, 10);

  hammer = new Hammer(mouseX, mouseY);

  sand1 = new Sand(200, 200);
  sand2 = new Sand(230, 200);
  sand3 = new Sand(260, 200);
  sand4 = new Sand(290, 200);
  sand5 = new Sand(320, 200);
  sand6 = new Sand(350, 200);
  sand7 = new Sand(380, 200);

  stone = new Stone(500, 200);

  rubber = new Rubber(600, 200);

  iron = new Iron(100, 200);

  //Create the Bodies Here.
}

function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(myEngine);

  ground.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  rubber.display();
  stone.display();
  iron.display();

  drawSprites();
}
