
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var wall,b1,b2,b3,b4,b5;
var bobDiameter = 50;
var scientist,sImage,scientist2,sImage2; 
var back,scientist3,sImage3,back2,bImage;


function preload()
{
  

  sImage = loadImage("scientist.png")
  sImage2 = loadImage("scientist2.png")
  back = loadImage("back400.png");
  sImage3 = loadImage("scientist3.png")
 
}
function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	wall = new Roof(420,120,250,50);
  b1 = new Bob(300,360,25);
	b2 = new Bob(350,360,25);
	b3 = new Bob(400,360,25);
	b4 = new Bob(450,360,25);
	b5 = new Bob(500,360,25);

	r1 = new Rope(b1.body,wall.body,-bobDiameter*2,0);
	r2 = new Rope(b2.body,wall.body,-bobDiameter,0);
	r3 = new Rope(b3.body,wall.body,0,0);
	r4 = new Rope(b4.body,wall.body,bobDiameter*1,0);
	r5 = new Rope(b5.body,wall.body,bobDiameter*2,0);

  r6 = createSprite(80,650,152,100);
  r6.shapeColor = ("#C78128");

  r7 = createSprite(410,662,152,80);
  r7.shapeColor = ("#E7671D");


  scientist = createSprite(620,580,50,50);
  scientist.addImage(sImage);
  scientist.scale = 0.8;
	

  scientist2 = createSprite(100,550,50,50);
  scientist2.addImage(sImage2);
  scientist2.scale = 0.8;

  scientist3 = createSprite(400,550,50,50);
	scientist3.addImage(sImage3);
  scientist3.scale = 0.8;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);

  
  r1.display();
  r2.display();
  r3.display();
  r5.display();
  r4.display();
  
  wall.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  
  drawSprites();

 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(b1.body,b1.body.position,{x: -100, y: -200});
	}

  if (keyCode === DOWN_ARROW){

    Matter.Body.applyForce(b5.body,b5.body.position,{x: 100, y: 200});


  }
}




