const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload(){
  polygonImg=loadImage("polygon.png");
}
  function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;

  createSprite(400, 200, 50, 50);
  ground = new Ground(840,130,100,20);
  ground2 = new Ground(500,330,100,20);
  polygon = new Polygon(100,250,100)
  slingshot = new Slingshot(polygon.body,{x:100,y:250});
  //building 1
  //level one
  block1 = new Block(500,240,30,40);

	block2 = new Block(490,260,30,40);
	block3 = new Block(500,260,30,40);
	block4 = new Block(510,260,30,40);
	block5 = new Block(480,280,30,40);
	block6 = new Block(490,280,30,40);
  block7 = new Block(500,280,30,40);
   //level two 
	block8 = new Block(510,280,30,40);
	block9 = new Block(520,280,30,40);
  block10 = new Block(470,300,30,40);
	block11 = new Block(480,300,30,40);
  block12 = new Block(490,300,30,40);
   //level three
	block13 = new Block(500,300,30,40);
	block14 = new Block(510,300,30,40);
  block15 = new Block(520,300,30,40);
  //level four 
  block16 = new Block(530,300,30,40);

  //building 2

  block17 = new Block(850,60,30,40);

	block18 = new Block(840,80,30,40);
	block19 = new Block(850,80,30,40);
	block20 = new Block(860,80,30,40);

	block21 = new Block(830,100,30,40);
	block22 = new Block(840,100,30,40);
	block23 = new Block(850,100,30,40);
	block24 = new Block(860,100,30,40);
	block25 = new Block(870,100,30,40);

  }

function draw() {
  background("grey");  
  drawSprites();
  ground.display();
  ground2.display();
  slingshot.display();
  polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
}
function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}