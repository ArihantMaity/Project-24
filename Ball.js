class Balls{
    constructor(x,y){
        var balloptions ={
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2


        }
       
        this.body =  Matter.Bodies.circle(x,y,35,balloptions);
        this.radius=35;
       
        
       
        World.add(world,this.body);
    }

    display(){
        var pose=this.body.position;
        var ang=this.body.angle;
        push()
        translate(pose.x,pose.y);
        rotate(ang);
        rectMode(CENTER);
        fill("yellow");

        ellipse(0,20,this.radius);
        pop();

    }
}