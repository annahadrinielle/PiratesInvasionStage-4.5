class Boat {
  
  //contsructor has an additional parameter boatAnimation
  constructor(x, y, width, height, boatPos, boatAnimation) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "boat"
    };
    
    //create a new property named animation to store boatAnimation value
    this.animation = boatAnimation;
    //property to set animation speed
    this.speed = 0.05;
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }

  //set speed of animation
  animate() {
    this.speed += 0.05 % 1.1;
  }

  remove(index) {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    
    //create index by dividing speed by length of animation and getting the smallest value by floor() function
    //index will be used to traverse through the set of animations
    var index = floor(this.speed % this.animation.length);
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    
    //use index to get the animation
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
