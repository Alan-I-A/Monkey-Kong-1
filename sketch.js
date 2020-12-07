
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0, score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  bananaGroup = new Group();
  obstacleGroup = new Group();

}


function draw() {
  
  background ("lightblue");
  
   stroke("red");
  textSize(20);
  fill("lightgreen");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("orange");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime, 100,50 );
      
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
    food();
    obstacles();
    drawSprites();
}

function food(){
  
  if (frameCount % 80 === 0){
    var banana = createSprite(600,165,10,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.085 ;
    banana.velocityX = -6;
    banana.setLifetime = 50;
    bananaGroup.add(banana);
  
  } 
  
}

function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,310,10,40);
   // obstacle.y = Math.round(random(120,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2 ;
    obstacle.velocityX = -6;
    obstacle.setLifetime = 50;
    obstacleGroup.add(obstacle);

  }  
  
} 



