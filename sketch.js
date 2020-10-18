const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles=[];
var divisions=[];
var plinko=[];
var divisionHeight=300;


function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;

 ground=new Ground(width/2,height,width,20);
 for (var k=0; k<=width; k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for(var f=75; f<=width; f=f+50){
  plinko.push(new Plinko(f,75));
}

for(var j=50; j<=width-10; j=j+50){
  plinko.push(new Plinko(j,175));
}
for(var f=75; f<=width; f=f+50){
  plinko.push(new Plinko(f,275));
}
for(var f=50; f<=width-10; f=f+50){
  plinko.push(new Plinko(f,375));
}




}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  
  for(var f=0; f<plinko.length; f++){
    plinko[f].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  
for(var j=0; j<particles.length; j++){
  particles[j].display();
}

 for(var k=0; k<divisions.length; k++){
   divisions[k].display();
 }





 
}
