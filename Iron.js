class Iron {
  constructor(x, y) {
    var options = {
      restitution: 0.1,
      density: 1,
      friction: 400,
    };
    this.body = Bodies.rectangle(x, y, 80, 80, options);
    World.add(myWorld, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fill(rgb(51, 0, 51));
    rect(0, 0, 80, 80);
    pop();
  }
}
