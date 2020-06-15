
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base;
var ball1;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	base = Bodies.rectangle(500,100,400,20,{isStatic:true});
	World.add(world,base);
	//Center ball
	ball1 = new Ball(500,200);
	chain1 = new Chain(ball1.body,{x:500,y:100});

	ball2 = new Ball(420,200);
	chain2 = new Chain(ball2.body,{x:420,y:100});
	//first ball
	ball3 = new Ball(340,100);
	chain3 = new Chain(ball3.body,{x:340,y:100});

	ball4 = new Ball(580,200);
	chain4 = new Chain(ball4.body,{x:580,y:100});
	//last ball
	ball5 = new Ball(660,200);
	chain5 = new Chain(ball5.body,{x:660,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  noStroke();
  fill("pink");
  ball1.display();
  fill("blue");
  ball2.display();
  fill("yellow");
  ball3.display();
  fill("purple");
  ball4.display();
  fill("green");
  ball5.display();

  fill('brown');  
  rect(base.position.x,base.position.y,400,20);
  fill("white");
  textSize(20);
  text("Press SPACE to start",50,500);
  textSize(30);
  text("NEWTON'S CRADLE",350,600);
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-100,y:-60});
	}
}
