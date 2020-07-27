class Particle {

    constructor(x, y, radius) {
        var options = {
            restitution:0.1,
        }
        this.radius=radius;
        //this.angle = angle;
        this.body = Bodies.circle(x, y,this.radius/2,options);
        this.rand = random(0, 255);
        this.rand2 = random(0, 255);
        this.rand3 = random(0, 255);
        World.add(world, this.body);
    }

    display() {
        
        var pos = this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x, pos.y)
        rotate(angle);
        fill(this.rand, this.rand2, this.rand3);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius,this.radius);
        pop();
    }
}