class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
    this.r=10;  
    
    this.body = Bodies.circle(x, y,this.r,options);
   
   // this.height = height;
    
    World.add(world, this.body);
    }

 display(){


    var pos=this.body.position
    push();
    strokeWeight(3);
	fill(255,0,255)
    translate(pos.x, pos.y);
    ellipse(0,0,this.r,this.r);
    pop();

}
};