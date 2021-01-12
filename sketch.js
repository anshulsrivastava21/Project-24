var left, right, bottom, ball, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(900,670,1800,20);
ball = new Paper(200, 650, 20);
bottom = new Dustbin (1600,650, 200,20);
left = new Dustbin(1500, 650, 20, 100);
right = new Dustbin(1700, 650, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  bottom.display();
  left.display();
  right.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==="up"){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:100, y:-100})
	}
}


