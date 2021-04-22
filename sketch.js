const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops;
var maxDrops = 100;
var createdrops= [];
var person,pImg;
var thunder, tImg,tImg2,tImg3,tImg4,rand,TFC;

function preload(){
     //pImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    tImg = loadImage("1.png");
    tImg2 = loadImage("2.png");
    tImg3 = loadImage("3.png");
    tImg4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    drops = new drop(random(50,300),random(50,500));
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
    TFC = frameCount
    thunder = createSprite(random(20,380),random(20,80),10,10);
    switch (rand) {
        case 1:  thunder.addImage(tImg)
        break;
        case 2:  thunder.addImage(tImg2)
        break;
        case 3:  thunder.addImage(tImg3)
        break;
        case 4:  thunder.addImage(tImg4)
        break;
        default:
            break;
    }
    thunder.scale = random(0.3,0.6)
}
    if(TFC%10 === 0){
        thunder = null;
    }
    person = new umbrella(200,500);
    person.scale= 0.25
    if(frameCount % 250 === 0){

        for(var i=0; i<maxDrops; i++){
            createdrops.push(new drop(random(0,400), random(0,400)));
        }

    }
}

function draw(){
    background("black")
    Engine.update(engine);
        person.display()
        for(var i = 0; i<maxDrops; i++){
            createdrops[i].display();
            createdrops[i].updateY()
            
        }
    drawSprites()
}   

