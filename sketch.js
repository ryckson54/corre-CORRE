var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boyImg= loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
pathImg= loadImage("path.png")

}

function setup(){
  
  createCanvas(400,400);
 
  path = createSprite(200, 200, 30, 40);

  path.addImage(pathImg);

path.scale=1.2;


  boy = createSprite(200, 200, 30, 30);

  boy.addAnimation("running", boyImg);
boy.scale=0.8;
  

  leftBoundary=createSprite(0,0,100,800);

  leftBoundary.visible= false ;


  rightBoundary=createSprite(410,0,100,800);

  rightBoundary.visible = false ;
}

function draw() {
  background(0);
  path.velocityY = 4;
  

  boy.x = mouseX ;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  if(path.y > 600 ){
    path.y = height/2;
  }
  
  
  drawSprites()


}










