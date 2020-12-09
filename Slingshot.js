class SlingShot{
    constructor(bodyA, pointB, bird){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.slingImage1 = loadImage("sprites/sling1.png");
        this.slingImage2 = loadImage("sprites/sling2.png");
        this.slingImage3 = loadImage("sprites/sling3.png");
        this.birdInverted = loadImage("sprites/bird inverted.png");
        this.birdImage = loadImage("sprites/bird.png");
        this.bird = bird;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingImage1,200,20);
        image(this.slingImage2,170,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,27,8);
            if (pointA.x < 200){
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x - 5, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 50, pointB.y)
            this.bird.image = loadImage("sprites/bird.png")
            image(this.slingImage3, pointA.x - 30, pointA.y - 10, 15, 30);
            }
            else {
                strokeWeight(4);
                line(pointA.x + 25, pointA.y, pointB.x - 5, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 50, pointB.y);
                image(this.slingImage3, pointA.x + 20, pointA.y, 15, 30);
                this.bird.image = loadImage("sprites/bird inverted.png")
            }
            pop();
        }
    }
    
}