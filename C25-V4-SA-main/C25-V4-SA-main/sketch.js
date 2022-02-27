
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var log1,log2,log3,log4;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  log1 = new Ground(50,370,50,30);
  log2 = new Ground(150,370,50,30);
  log3 = new Ground(250,370,50,30);
  log4 = new Ground(350,370,50,30);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  log1.show();
  log2.show();
  log3.show();
  log4.show();
 
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  