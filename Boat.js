class Boat {
  constructor(x, y, width, height, boatPosY) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.boatPosY = boatPosY;
    this.boat_image = loadImage("assets/boat.png");
    World.add(world, this.body);
}

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.boat_image, 0, this.boatPosY, this.width, this.height);
    pop();

  }
}