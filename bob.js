class Bob{

    constructor (x,y,radius){
    
    var options= {
        isStatic:false,
      'restitution':1.1,
      'friction':2.2,
      'density':1.0
    
    }
    
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      World.add(world,this.body);
    }
    
    
    display(){
   
    
    push();
    
    stroke("salmon")
    ellipseMode(RADIUS);
    fill("peachPuff");
    ellipse(this.body.position.x, this.body.position.y, this.radius);
    pop();
    
    
    
    
    
    }
    }