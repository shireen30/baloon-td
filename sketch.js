var bgImage;
var balloon,baloonImg;
var horiztl=true;
var monkeyImg
var monkey 
var click=false;
var laserImg;
var redBalloonImg;
var redRadar;
function preload(){
bgImage=loadImage("assets/Monkey_Lane.webp")
baloonImg=loadImage("assets/bloon_blue.png")
monkeyImg=loadImage("assets/monkey.png")
laserImg=loadImage("assets/laser3.png");
redBalloonImg=loadImage("assets/bloon_red.png");
redRadar=loadImage("assets/red.jpg");
}

function setup() {
  createCanvas(1200,800);
  balloon=createSprite(20,470,50,50);
  balloon.addImage("blue",baloonImg);
  balloon.addImage("red",redBalloonImg);
  balloon.scale=0.15;
  balloon.velocityX=4;
  
}

function draw() {
  background(bgImage);

  
  
 // balloon.x+=2;
  if(balloon.x>294 && horiztl==true){
    balloon.velocityY=-4;
    //balloon.x=294;

    balloon.velocityX=0

    
     }
 if(balloon.y<349 && horiztl==true){
  balloon.velocityY=0;    
  // balloon.y=349;
      
      balloon.velocityX=4;
       console.log("path2")
       
     }
  if(balloon.x>484 && horiztl==true){
    balloon.velocityY=4;
    balloon.velocityX=0;
    console.log("path10")
    

  }
  if(balloon.y>753 && horiztl==true){
    balloon.velocityY=0;   
    balloon.velocityX=4;
    console.log("path9")
         
       }
       if(balloon.x>775 && horiztl==true){
         balloon.x=776;
         balloon.y=452
        //  balloon.velocityX=0;
        //  balloon.velocityY=0;
        horiztl=false;
        console.log("hello")
       }
       if(balloon.y==452 && balloon.x==776 ){
         balloon.velocityY=-4
         balloon.velocityX=0;
         console.log("path8")
       }
       if(balloon.y<230  && horiztl==false){
         balloon.velocityX=-4;
         balloon.velocityY=0;
         console.log("path7")

       }
       if(balloon.x<295 && horiztl==false){
         balloon.velocityX=0;
         balloon.velocityY=-4
         console.log("path6")
         
       }
       if(balloon.y<96 && horiztl==false){

        balloon.velocityX=4;
        balloon.velocityY=0
        console.log("path5")
       }
       if(balloon.x>920 && balloon.y>100 && horiztl==false){
        console.log("path4")
         balloon.velocityX=0;
         balloon.velocityY=4;
       }
       if(balloon.y>210 && balloon.x>928 && horiztl==false){
         console.log("path3")
         balloon.velocityY=0;
         balloon.velocityX=4
       }
  
// console.log("balloon"+balloon.x)
  drawSprites();
//console.log(mouseX,mouseY)

if(monkey!==undefined){
  //fill("red")
  tint(200, 0, 0,60)
  strokeWeight(3)
  //imageMode("CENTER")
 image(redRadar,monkey.x-50,monkey.y-50,100,100)
}

if(frameCount%50==0){
    if(monkey!==undefined && balloon!==undefined)
    {
      var d=dist(monkey.x,monkey.y,balloon.x,balloon.y);
      console.log(Math.round(d))
     
      if(d<=100){
      // balloon.destroy();
      balloon.changeImage("red") 
    //  console.log("balloon destroyed")
      }

    }
}

  }
function mouseClicked(){
  if(!click){
  monkey=createSprite(mouseX,mouseY)
  monkey.addImage(monkeyImg)
  monkey.scale=0.8

  //console.log("mouse pressed")
  click=true

  }
 
}
function keyPressed(){
  console.log("key")
  if(keyCode==32){
    console.log("key32")
    var arrow=createSprite(monkey.x,monkey.y,10,100);
    arrow.addImage(laserImg);
    arrow.scale=0.2;
  
    arrow.velocityY=2;
    arrow.velocityX=-2;
  }
}