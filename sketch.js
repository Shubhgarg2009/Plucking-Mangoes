const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1, mango2, backgroundImg,stone, laucher;

function preload() {
    backgroundImg = loadImage("bg.png");
// treeIMG=loadImage("Plucking mangoes/tree.png");
	//boyIMG=loadImage("Plucking mangoes/boy.png");
}

function setup(){
    var canvas = createCanvas(1200,400);

tree=createSprite(600,350,50,50);
//tree.addImage(treeIMG);
tree.scale=0.4;
boy=createSprite(200,570,20,20);
//boy.addImage(boyIMG);
boy.scale=0.1;
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    mango1 = new Mango(700,320,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(700,240,70,70);
    mango4 = new Mango(920,240,70,70);
    mango5 = new Mango(810,160,70,70);
    stone = new Stone(200,50);
    laucher = new Laucher(stone.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();
    mango5.display();
    stone.display();
    laucher.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    laucher.fly();
}

function keyPressed(){
if (keyCode === 32){
laucher.attach(stone.body)
}
}
function detectCollision(stone ,mango ){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position
   
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.ys,mangoBodyPosition.x,mangoBodyPosition.y)
   
   if (distance<=mango.r,stone.r){
   Matter.Body.setStatic(mangoBody,false);
   }
   }