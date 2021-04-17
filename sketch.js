
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObj;
var treeObj;
var tree1,treeImg;
var mangoObj1,mangoObj2,
mangoObj3,mangoObj4,mangoObj5,
mangoObj6,mangoObj7,mangoObj8,
mangoObj9,mangoObj10,mangoObj11,
mangoObj12,mangoObj13,mangoObj14,mangoObj15;

var stoneObj;
var boy,boyImg;
var launcherObj;
var launchingForce = 500;

function preload()
{
	  boyImg = loadImage("boy.png");
    treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
  mangoObj1 = new Mango(1020,300,29);
  mangoObj2 = new Mango(1090,250,28);
  mangoObj3 = new Mango(980,200,35);
  mangoObj4 = new Mango(940,300,30);
  mangoObj5 = new Mango(1050,150,29);

  mangoObj6 = new Mango(1070,300,30);
  mangoObj7 = new Mango(1028,220,29);
  mangoObj8 = new Mango(900,270,30);
  mangoObj9 = new Mango(990,270,26);
  mangoObj10 = new Mango(700,270,30);
  mangoObj11 = new Mango(800,250,30);
  mangoObj12 = new Mango(900,200,35);
  mangoObj13 = new Mango(900,130,40);
  mangoObj14 = new Mango(750,200,20);
  mangoObj15 = new Mango(950,160,29);

  stoneObj = new stone(200,440,31);
 
  groundObj=new ground(width/2,600,width,100);
  
  boy=createSprite(280,520,50,20);
  boy.addImage(boyImg);
  boy.scale=0.12;

  tree1 = createSprite(900,355,370,500)
  tree1.addImage(treeImg)
  tree1.scale = 0.5

  launcherObj=new launcher(stoneObj.body,{x:200,y:440});  

	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);	
  rectMode(CENTER);
  background("white");

  groundObj.display();
  tree1.display();
  mangoObj1.display();  
  mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();
  mangoObj6.display();
  mangoObj7.display();
  mangoObj8.display();
  mangoObj9.display();

  mangoObj10.display();
  mangoObj11.display();
  mangoObj12.display();
  mangoObj13.display();
  mangoObj14.display();
  mangoObj15.display();
  boy.display();
  stoneObj.display();
  launcherObj.display();

  detectCollision(stoneObj, mangoObj1);
	detectCollision(stoneObj, mangoObj2);
	detectCollision(stoneObj, mangoObj3);
  detectCollision(stoneObj, mangoObj4);
  detectCollision(stoneObj, mangoObj5);
  detectCollision(stoneObj, mangoObj6);
  detectCollision(stoneObj, mangoObj7);
	detectCollision(stoneObj, mangoObj8);
  detectCollision(stoneObj, mangoObj9);
  detectCollision(stoneObj, mangoObj10);
  detectCollision(stoneObj, mangoObj11);
  detectCollision(stoneObj, mangoObj12);
  detectCollision(stoneObj, mangoObj13);
  detectCollision(stoneObj, mangoObj14);
  detectCollision(stoneObj, mangoObj15);

}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcherObj.fly()
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:200,y:440})
    launcherObj.attach(stoneObj.body)
  }
}

function detectCollision(lstone,lmango) {
   mangoBodyPosition=lmango.body.position;
   stoneBodyPosition=lstone.body.position;

   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);  

   if(distance<=lstone.body.circleRadius+lmango.body.circleRadius)
    {
     Matter.Body.setStatic(lmango.body,false);
    }
}

