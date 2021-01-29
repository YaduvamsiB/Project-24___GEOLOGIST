class Sand {
  constructor(x, y) {
    var options = {
      restitution: 0.5,
      density: 1,
      friction: 5,
    };
    this.body = Bodies.circle(x, y, 5, options);
    World.add(myWorld, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(0);
    circle(0, 0, 5);
    pop();
  }
}
