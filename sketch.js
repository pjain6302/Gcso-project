var car;
var wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(150, 200, 50, 50);
  car.velocityX = 8;
 wall = createSprite(760,200,20,400);

}

function draw() {
  background("black");  

  if(car.isTouching(wall)){
    car2 = createSprite(730,200,25,35);
    car.velocityX = 0;
    car.visible = false;
  }

  drawSprites();
}