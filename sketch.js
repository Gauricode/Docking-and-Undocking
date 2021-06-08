var iss,spacecraft;
var hasDocked=false;

function preload(){
  bg=loadImage("space.jpg")
  iss=loadImage("iss.png");
  //spacebg=loadImage("space.jpg");
  spacecraft1=loadImage("spacecraft1.png");
  spacecraft2=loadImage("spacecraft2.png");
  spacecraft3=loadImage("spacecraft3.png");
  spacecraft4=loadImage("spacecraft4.png");
  

}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  iss=createSprite(330,130,10,10);
  iss.addImage(iss);
  iss.scale=0.25;
  spacecraft=createSprite(285,240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.15;
  
}

function draw() {
  background(bg);
  if(!hasDocked){
   spacecraft.x=spacecraft.x+random(-1,1);

   if(keyDown("UP_ARROW")){
     spacecraft.y=spacecraft.y-2;
    //spacecraft.addImage(spacecraft4)
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft1)
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft2)
    spacecraft.x=spacecraft.x+2;
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft3)
    spacecraft.x=spacecraft.x-2;
  }
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("DOCKING SUCCESSFUL",200,300)
  }
  
  drawSprites();
}