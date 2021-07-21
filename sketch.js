 const  Engine = Matter.Engine;
  const  World = Matter.World;
  const  Events = Matter.Events;
  const  Bodies = Matter.Bodies;

var engine, world;

var ground;
var snow = [];

var bgImg;
var girlImg, girl;

function preload() {
   bgImg = loadImage("snow1.jpg");
   girlImg = loadImage( "girl.png");

}

function setup() {
   createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(width/2, height, width, 20);

  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImg);
  girl.scale= 0.8;
}

function draw() {
  background(bgImg);  

  Engine.update(engine);
  ground.display();

  if(frameCount%60 ===0) {
    snow.push(new Snow(random(width/2-10, width/2+10),10, 10));
   
  }

  for (var j = 0; j< snow.length; j++){
    snow[j].display();
    snow.depth= girl.depth;
    snow.depth+=10;
  }

  
  drawSprites();
   
}

