class SlingShot{
    constructor(bodyA,pointB){
        var options ={
         bodyA:bodyA,
         pointB:pointB,
         length:10,
         stiffness:0.04

        }
        this.pointB=pointB
    this.Slingshot = Constraint.create(options)
    this.image1=loadImage('sprites/sling1.png');
    this.image2=loadImage('sprites/sling2.png');
    this.image3=loadImage('sprites/sling3.png');

World.add(world, this.Slingshot)

    }
    fly(){
        this.Slingshot.bodyA = null;
    }
    display(){
        image(this.image1,200,50);
        image(this.image2,170,50);
        if(this.Slingshot.bodyA){
            var pointa = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8)
            if(pointa.x<220){
                line(pointa.x-20 ,pointa.y, pointB.x-10, pointB.y )
                line(pointa.x-20 ,pointa.y, pointB.x+30, pointB.y )
                image(this.image3,pointa.x-30,pointa.y-15,15,30);
            }
            else{
                line(pointa.x+25 ,pointa.y, pointB.x-10, pointB.y )
                line(pointa.x+25 ,pointa.y, pointB.x+30, pointB.y )
                image(this.image3,pointa.x+25,pointa.y-15,15,30);
            }
            
        }
       
        
    }

}