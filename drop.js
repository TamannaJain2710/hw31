class drop{
    constructor(x,y){
        var options = {
            'density':0.5,
            'friction': 0.1,
            'restitution':0.5
        }
        
        this.body = Bodies.circle(x,y,3,options)
        this.x = x;
        this.y = y;
       // this.width=3;
        //this.height = 3;
        this.radius = 3
        World.add(world, this.body);
        
    }


    
updateY(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,300)})
    }
}

    display(){
        
        //this.body.color('rgb(0,5,235)');
        push()
        noStroke();
        fill(rgb(0,5,235));
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        //ellipse(this.body, 0, 0, 20);                
        pop();
       
    }
}