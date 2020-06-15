class Chain{
    constructor(bodyA,pointB){
        var options={
            stiffness:1,
            length:300,
            bodyA:bodyA,
            pointB:pointB
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.chain);
    }
    display(){
        var posA = this.chain.bodyA.position;
        stroke("white");
        strokeWeight(2);
        line(posA.x,posA.y,this.pointB.x,this.pointB.y);
    }
}