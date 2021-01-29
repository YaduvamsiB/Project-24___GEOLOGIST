class Rubber {
  constructor(x, y) {
    var options = {
      restitution: 0.3,
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
    fill(rgb(255, 94, 0));
    strokeWeight(4);
    stroke("blue");
    circle(0, 0, 50);
    pop();
  }
}
