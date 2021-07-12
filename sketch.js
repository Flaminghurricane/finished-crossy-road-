var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play"; 
var gameState = "win"; 
var gameState = "lose";
var carAnimation, logAnimation, playerAnimation;
var city;
function preload()
{
  carAnimation1=loadAnimation("images/car1.png"); 
  carAnimation2=loadAnimation("images/car2.png");
  playerAnimation=loadAnimation("images/Player-03.png");
  logAnimation=loadAnimation("images/log2.png"); 
  cityImage=loadImage("images/city1.png");
}

function setup() {
  createCanvas(1366,700); 

  city=createSprite(width/2,-1500); 
  city.addImage("city",cityImage);





  carGroup1 = new Group();
  logGroup1 = new Group(); 
  
  
  for(var i=0;i<6;i++){ 
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight); 
    
    if(i%2===0){ 
var road = createSprite(683,height-150-(i*400)-grassHeight,width,300,); 
road.shapeColor="black"; 
    }
    
    bottomGrass1.shapeColor = "green";

  }
    
    for(var i = 0; i < 40; i++){ 
      cars = new Car(2); 
      carGroup1.add(cars.spt);
     }

     for(var i = 0; i < 40; i++){ 
      logs = new Log(-2); 
      logGroup1.add(logs.spt);
     }
     player = new player(width/2,height-25);


  
  
  
  
  
  
  
   
 }

function draw() {
  background("skyblue");
translate(0,-player.spt.y+height-150);
  
for(i=1;i<logGroup1.length;i++){
  if(logGroup1[i].x<0)
    logGroup1[i].x=width;
  }
  for(i=1;i<carGroup1.length;i++){
    if(carGroup1[i].x<0)
    {
 
    
    carGroup1[i].x=width;
  }
 if(carGroup1[i].x>width){
   carGroup1[i].x=0;
 }

 if(city.isTouching(player.spt)){ 

gameState = "win";

 }



  }
  if(carGroup1.isTouching(player.spt)){
    player.spt.x = width/2;
    player.spt.y = height-75;
  }
  if(logGroup1.isTouching(player.spt)){
    
    
  } 

  else if(( player.spt.y > height-1550 && player.spt.y < height-1300) ||

 (player.spt.y < height-500 && player.spt.y > height-850) ||
 (player.spt.y>height) ||
 (player.spt.x<0) ||
 (player.spt.x>width)){

  player.spt.x=width/2;
  player.spt.y = height-75;}
  

if(gameState === "win"){ 

stroke("green"); 
fill("green"); 
textSize(40); 
text("cangratulations!! You made it.",width/2-250,-1700);
carGroup1.destroyEach(); 
logGroup1.destroyEach(); 







}












 

  drawSprites();
}
function keyPressed(){ 
if(keyCode == UP_ARROW){ 
  player.move(0,-2);
}
else if(keyCode == DOWN_ARROW){ 
  player.move(0,2);
}
else if(keyCode == LEFT_ARROW){ 
  player.move(-2,0);
}
else if(keyCode == RIGHT_ARROW){ 
  player.move(2,0);
}
}
























