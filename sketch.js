const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops=[];
var maxDrops=100;
var Thunder;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
   thunder2 = loadImage("thunderbolt/2.png");
   thunder3 = loadImage("thunderbolt/3.png");
   thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(500, 600);

    engine = Engine.create();
   world = engine.world;
    
  
}

function draw(){
    background("black")

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        Thunder = createSprite(rand(10,370), rand(10,30), 10, 10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break; 
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;
        }

    for(var i=0; 1<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }

drops.display();
Thunder.display();

drawSprites();

}   
}
