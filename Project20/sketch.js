var car, wall;
var speed, weight;







function setup() {
  createCanvas(1600,800);
  speed = random(55,80);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = rgb(52, 158, 235);
  car.velocityX = speed;

  wall = createSprite(1500,200,30,height/2);
  wall.shapeColor = rgb(235, 140, 52);
}

function draw() {
  background(0,255,255);  
 
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/20500;

    if(deformation > 180){
      car.shapeColor = rgb(0,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = rgb(255,0,0);
    }
    if(deformation < 100){
      car.shapeColor = rgb(0,255,0);
    }

  }
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}