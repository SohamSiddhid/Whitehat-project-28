class stone{
    constructor(x,y,r) {      
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2,
            
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("stone1.png");
        
        this.body = Bodies.circle(this.x,this.y,r/2,options);
        
        World.add(world,this.body);  
         
}

     display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }   
}