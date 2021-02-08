//Renaming
const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies

function setup(){
  createCanvas(1200,400);
  //creating our engine
  engine = Engine.create()
  //creating our world inside engine
  world = engine.world

  ground = new Ground(600,390,1200,20)

  box1 = new Box(700,320,70,70)
  box2 = new Box(920,320,70,70)
  pig1 = new Pig(810,350)
  log1 = new Log(810,260,300,PI/2)
}

function draw(){
  background(0);

  Engine.update(engine)

  ground.display()
  box1.display()
  box2.display()
  pig1.display()
  log1.display()
}
