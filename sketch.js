const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops;
var maxDrops = 100;
var createdrops= [];

function preload(){
     
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    drops = new drop(16, 4);
}

function draw(){
    background("white")
    Engine.update(engine);
    drops.display();
    for (var i =0; i<maxDrops; i++){
        createdrops.push(new drop(random(0,400),random(0,400)))
    }
    if ((this.body.position.y > height) && (frameCount % 2 == 0) ){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
    
}   

