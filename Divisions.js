class Division{

    constructor(x,y) {

        var options={
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y, 10, divisionHeight/2,options);
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,20,divisionHeight);
    }
}