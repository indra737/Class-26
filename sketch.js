const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var bird;
var pig1,pig2;
var log1,log2,log3,log4;
var bg
var ground3

function preload(){
bg= loadImage("bg.png")

}
function setup(){
    angleMode(RADIANS)
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
log1= new Log(width-400,height-100,320,PI/2)
log2= new Log(width-400,height-220,320,PI/2)
log3= new Log(width-300,height-300,150,-PI/4.5)
log4= new Log(width-500,height-300,150,PI/4.5)
    box1 = new Box(width-300,height-45,100,100);
    box2= new Box(width-500,height-40,100,100);
    box3 = new Box(width-300,height-160,100,100);
    box4= new Box(width-500,height-160,100,100);
    bird= new Bird(100,300)
    pig1= new Pig(width-400,height-60);
    pig2= new Pig(width-400,height-170)
    box5= new Box(width-400,height-280,100,100)
    ground= new Ground(width/2,height,width,30)
ground3= new Ground(width/9,height-30,900,700)
}

function draw(){
    background(bg);
   Engine.update(engine);
    box1.show();
    box2.show();
    box3.show()
    box4.show()
   box5.show()
    ground.show();
    bird.show();
    pig1.show();
    pig2.show()
   log1.show()
   log2.show()
  log3.show()
   log4.show()
   ground3.show()
}