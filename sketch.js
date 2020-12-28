var fr;
var mr;
var object1, object2, object3, object4;
var car,wall;
function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor="#FFEBCD"
  mr = createSprite(80, 150, 100, 100);
  mr.shapeColor="#FFEBCD"
  object1 = createSprite(600, 100, 50, 50);
  object1.shapeColor="magenta"
  object1.velocityX = 5;
  object2 = createSprite(500, 100, 50, 50);
  object2.shapeColor="magenta"
  object2.velocityX= -5;
  car = createSprite(100, 100, 50, 50);
  car.shapeColor="black"
  wall = createSprite(200, 100, 50, 50);
  wall.shapeColor="black"
  object3 = createSprite(300, 100, 50, 50);
  object3.shapeColor="black"
  object4 = createSprite(400, 100, 50, 50);
  object4.shapeColor="black"
}

function draw() {
  background("#A9A9A9"); 
  object1.x = World.mouseX;
  object1.y = World.mouseY; 
  
  if(isTouching(object1, wall)){
    object1.shapeColor = "pink";
    wall.shapeColor = "pink";
  }else{
    object1.shapeColor = "orange";
    wall.shapeColor = "orange";
  }

  bounceOff(object1, object2);

  drawSprites();
}

