var bullet,wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);


  speed = random(223,321);
  weight = random(30,52);

  // thickness=random(22,83);

  wall = createSprite(1200,200,thickness=random(22,83),height/2);
  wall.shapeColor=color (80,80,80);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor=color(204,236,239);
  bullet.velocityX = speed;
}

function draw() {
  background(251,182,238);  
  drawSprites();
  

  if(isTouching(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5* weight * speed * speed  / (thickness*thickness*thickness);

    if(damage>10){
      bullet.shapeColor=color(255,0,0);
    }

    if(damage<10){
      bullet.shapeColor=color(0,255,0);
    }
  }
}
