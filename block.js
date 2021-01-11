class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
      this.Visiblity = 255;
    }

    score(){
      if(this.Visiblity < 0 && this.Visiblity >-105){
        score++
      }
    }
display(){
  push();
  if(this.body.speed < 3 ){
    this.visiblity = 255;
    }
   else {
      World.remove(world, this.body);
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
    }
    pop();
}
  
  };