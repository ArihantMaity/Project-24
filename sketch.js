
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,height,width,20)
    ball=new Balls(100,670);
    box1=new Boxes(550,655,10,70);
    box2= new Boxes(605,685,100,10);
    box3=new Boxes(650,655,10,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:205,y:-155});
  }
}
