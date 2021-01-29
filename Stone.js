class Stone {
  constructor(x, y) {
    var options = {
      restitution: 1.2,
      density: 1,
      friction: 5,
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(myWorld, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fill(rgb(102, 51, 0));
    rect(0, 0, 50, 50);
    pop();
  }
}
