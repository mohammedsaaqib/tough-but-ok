const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;


var particles = [];
var plinkos = [];
var divisions =[];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground =  new Ground(400,790,800,20);


  for (var k = 0; k < 800; k = k + 80) {
    divisions.push(new Divisions(k, 650, 10, 300));
  }



  for (var j = 75; j <=800; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <= 790; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=800; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=790; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("turquoise");

  Engine.update(engine);

  ground.display();  

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }


  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


   if(frameCount%10===0){
    particles.push(new Particle(random(350, 450), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  drawSprites();
}