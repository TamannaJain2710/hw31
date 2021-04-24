class umbrella{
    constructor(x,y){
        var options = {
            'isStatic':true
        }
        
        this.body = Bodies.circle(x,y,100,options)
        //this.x = x;
        //this.y = y;
        this.radius = 100
        this.image =  loadImage("walking_1.png")
        World.add(world, this.body);
        
    }



    display(){
        
       // push()
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 300,300);                
      //  pop();
       
    }
}