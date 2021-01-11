const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, 
block11, block12, block13, block14, block15, block16;
var polygon;
var polygonImage;
polygon.trajectory = [];
var slingshot;
var score = 0;

function preload(){
var polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);

    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    block16 = new Block(390, 155, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    imageMode(CENTER)
    image(polygonImage, polygone.position.x, polygon.position.y, 40, 40);
    World.add(world, polygon);

    slingshot = new Slingshot(this.polygon, {x: 100, y: 200});

  text("SCORE " + score, 750, 40);

}

function draw(){
    Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.sce();
block16.score();


}

function mouseDragged(){
    // if (gameState !== "launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
      //}
  }
  
  function mouseReleased(){
      slingshot.fly();
      gameState = "launched";
  }
  
  function keyPressed(){
      if (keyCode === 32 && polygon.body.speed < 1){
          slingshot.attach(bird.body);
          polygon.trajectory = [];
          Matter.Body.setPosition(polygon.body, {x:200, y: 50 });
      }
  }
