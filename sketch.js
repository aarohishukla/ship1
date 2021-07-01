var sea,seaImg;
var ship,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png,ship-2.png");
  }
  
  function setup(){
    createCanvas(400,400);
  sea.addImage(seaImg);
  ship.addAnimation(shipImg);
    if(sea.x<0){
      sea.x = sea.width/2;
    }
  }
  
  function draw() {
    background("blue");
   drawSprites();
  }