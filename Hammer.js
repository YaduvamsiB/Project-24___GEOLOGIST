class Hammer {
  constructor(x, y) {
    var options = {
      restitution: 0.5,
      density: 2,
      friction: 1.5,
    };
    this.body = Bodies.rectangle(x, y, 100, 30, options);
    World.add(myWorld, this.body);
  }

  display() {
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;

    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    fill("red");
    rect(0, 0, 100, 30);

    pop();
  }
}
