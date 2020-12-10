const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var thief1;
var button1,button2,button3;
var c1,c2,c3,c4,c5;
var gaurd1
var gameState=1

function setup() {
  var canvas = createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  thief1 = new thief(1200,450,50,50);
  cup1 = new cup(550,550,20,20)
  gaurd1 = new gaurd(800,50,20,20)




  m1=createSprite(25,50,50,50);
  m1.shapeColor="red"
  m1.visible=false

  m2=createSprite(50,100,200,20);
  m2.visible=false
  m3=createSprite(150,50,20,120);
  m3.visible=false
  m4=createSprite(550,600,2000,20);
  m4.visible=false
  m5=createSprite(1110,100,20,800);
  m5.visible=false
  m6=createSprite(400,500,1200,20);
  m6.visible=false
  m7=createSprite(1300,100,20,1000);
  m7.visible=false
  m8=createSprite(550,10,2000,20);
  m8.visible=false
  m9=createSprite(800,300,500,20);
  m9.visible=false
  m10=createSprite(550,300,20,200);
  m10.visible=false
  m11=createSprite(630,200,20,200);
  m11.visible=false
  m12=createSprite(400,100,20,650);
  m12.visible=false
  m13=createSprite(250,150,20,100);
  m13.visible=false
  m14=createSprite(150,300,300,20);
  m14.visible=false

  button1=createSprite(1098,100,10,10);
  button1.shapeColor="blue"
  button1.visible=false
  button2=createSprite(1098,150,10,10);
  button2.shapeColor="red"
  button2.visible=false
  button3=createSprite(1098,200,10,10)
  button3.shapeColor="yellow"
  button3.visible=false


  
}

 function draw() {
  background("white");

  Engine.update(engine);
/*if(thief1.isToching(button2)){
  m1.destroy();
}*/


if(gameState===1){

  textSize(40);
  fill("black")
  text("RULES",450,100)
  
  textSize(30);
  fill("black")
  text("1.press arrow keys to move",400,150)
  
  textSize(30);
  fill("black")
  text("2.collect other yellow items to move faster",400,200)
  

  textSize(30);
  fill("black")
  text("3.press space to continue",400,250) 

  textSize(30);
  fill("black")
  text("4. check out for gaurds",400,300);


  if(keyCode===32){
    gameState=2
  }
}
  
if(gameState===2){
  
  c1=createSprite(20,200,30,30);
  c1.shapeColor="gold"

  c2=createSprite(600,350,30,30);
  c2.shapeColor="gold"

  c3=createSprite(700,550,30,30);
  c3.shapeColor="gold"

  c4=createSprite(700,250,30,30);
  c4.shapeColor="gold"

  c5=createSprite(20,350,30,30);
  c5.shapeColor="gold"


  
  if(keyCode===87){
    Matter.Body.setVelocity(thief1.body,{x:0,y:5})
  }
  
  if(keyCode===83){
    Matter.Body.setVelocity(thief1.body,{x:0,y:2})
  }

  if(keyCode===65){
    Matter.Body.setVelocity(thief1.body,{x:-2,y:0})
  }
  
  if(keyCode===68){
    Matter.Body.setVelocity(thief1.body,{x:2,y:0})
  }

  textSize(20);
  fill("black")
  text("touch the rigth button in oder to exit ▶",700,50);
  thief1.display();
  m1.visible=true;
  m2.visible=true;
  m3.visible=true;
  m4.visible=true;
  m5.visible=true;
  m6.visible=true;
  m7.visible=true;
  m8.visible=true;
  m9.visible=true;
  m10.visible=true;
  m11.visible=true;
  m12.visible=true;
  m13.visible=true;
  m14.visible=true;
  button1.visible=true;
  button2.visible=true;
  button3.visible=true;
  

  textSize(20);
  fill("black")
  text("EXIT",50,50);

  }

  drawSprites()
  //console.log(thief1.body.position.x)
  //console.log(thief1.body.position.y)
}
