class Snow {
    constructor(x,y){
        var options = {
            density:0.8,
            friction:0.1, 
            isStatic : false
        }
        this.r = 10
        this.body = Bodies.circle(x,y,this.r, options);
        //this.width = width;
        //this.height = height;
       // this.image = loadImage( "snow5.webp");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);

        ellipse(0, 0, this.r, this.r);
        pop();
    }
}