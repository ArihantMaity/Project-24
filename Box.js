class Boxes{
    constructor(x,y,width,height){
        var boxoptions ={
            isStatic:true
        }
       
        this.body = Bodies.rectangle(x,y,width,height, boxoptions);
        this.width=width;
        this.height=height;
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

        rect(0, 0, this.width,this.height);
        pop();

    }
}