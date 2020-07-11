const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,ground, box, slingshot;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,400,2000,50);

  pig1 = new Bird(400, 150);
  pig2 = new Bird(400, 200);
  pig3 = new Bird(400, 250);
  pig4 = new Bird(400, 300);
  pig5 = new Bird(400, 350);
  box = new Box(100,100,20,20);
  slingshot = new Slingshot(box.body,{x:200, y:50});
}

function mouseDragged(){
  if(gameState !== "launched"){
    Matter.Body.setPosition(box.body, {x:mouseX, y:mouseY});
  }
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(box.body);
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}



function draw() {
  background(255,255,255);  
  box.display();
  pig1.display();
  pig2.display();
  pig3.display();
  pig4.display();
  pig5.display();
  ground.display();
  slingshot.display();
  drawSprites();

}