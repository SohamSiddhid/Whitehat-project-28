class ground {
    constructor(x,y,width,height){
     var options = {
        'isStatic':true,
        'density':1.0,
        'friction':1.0

     }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
  }

  display(){
    push()
    var pos = this.body.position;
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    fill("brown");
    rect(0,0,this.width,this.height);
    pop()
  }
}