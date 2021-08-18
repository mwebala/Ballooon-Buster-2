var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var red_group,pink_group,green_group,blue_group;
var score = 0 ;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  
  arrow_group = new Group()
   red_group = new Group()
   pink_group = new Group()
   green_group = new Group()
   blue_group = new Group()
}

function draw() {
 background(0);
  // moving ground

  

    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {

  createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount %60 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }else if(select_balloon == 2){
      blueBalloon();
    }else if(select_balloon == 3){
    greenBalloon();
    }else if(select_balloon == 4){
    pinkBalloon();
    }
  }
  if(pink_group.isTouching(arrow_group)){
    pink_group.destroyEach();
    score = score+5;

  }else if(red_group.isTouching(arrow_group)){
    red_group.destroyEach();
    score = score+3;
    
  }else if(green_group.isTouching(arrow_group)){
    green_group.destroyEach();
    score= score +5;

  }else if(blue_group.isTouching(arrow_group)){
    blue_group.destroyEach();
    score = score +3;

  }
  if(arrow_group.x>= 410){
    arrow_group.destroyEach();
  }
   
 
  drawSprites();
  textSize(23)
  fill("darkBlue")
  text("Score:"+score,10,30);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX =-20;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow_group.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 8;
  red.lifetime = 150;
  red.scale = 0.1;
  red_group.add(red)
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 8;
  blue.lifetime = 150;
  blue.scale = 0.12;
 blue_group.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green= createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 8;
  green.lifetime = 150;
  green.scale = 0.1;
  green_group.add(green)
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 8;
  pink.lifetime = 150;
  pink.scale = 1.3;
  pink_group.add(pink)
}

