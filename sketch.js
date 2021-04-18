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
    drops = new drop(random(50,400),random(50,400));
}

function draw(){
    background("black")
    Engine.update(engine);
    drops.display();
    for (var i =0; i<maxDrops; i++){
        createdrops.push(new drop(random(50,400),random(50,400)))
    }
    if ((drops.body.position.y > drops.body.height) && (frameCount % 2 == 0) ){
        Matter.Body.setPosition(drops.body, {x:random(50,400), y:random(50,400)})
    }
    
}   

