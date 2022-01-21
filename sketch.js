const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon, boat;
var cannonBall;
var balls = [];
var boats = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();
  for(var iBalls = 0; iBalls < balls.length; iBalls++) {
    showCannonBalls(balls[iBalls]);

  } 

  showBoats();
  cannon.display();
}

function keyPressed(){
  if (keyCode == DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    Matter.Body.setAngle(cannonBall.body,cannon.angle);
    balls.push(cannonBall);
    
  }
}

function showCannonBalls(cannonBall) {
  cannonBall.display();

}

function showBoats() {
  if (boats.lenght > 0) {
    for (var iBoats = 0; iBoats < boats.length; iBoats++) {
      if (boats [iBoats]) {
        Matter.Body.setVelocity(boats [iBoats].body,{
          x: -0.8, 
          y: 0
        });
        boats [iBoats].display();
      }

    }
    
  }
  else {
    boat = new Boat (width, height - 60, 170, 170);
    boats.push(boat);

  }
}

function keyReleased(){
  if (keyCode == DOWN_ARROW){
    balls[balls.length - 1].shoot();
    
    
  }
}