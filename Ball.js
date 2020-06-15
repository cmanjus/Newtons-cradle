class Ball{
    constructor(x,y){
        var options={
            restitution:1.2,
            density:0.4,
            friction:0,
            airFriction:0,
            
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}