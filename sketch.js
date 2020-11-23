const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300;
var particle;
var turn=0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);


  var particles = [];
  var plinko = [];
  var divisions = [];


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display(); 
  divisionHeight.display();
  drawSprites();
}

function mousePressed()
{
  if(gamestate!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10);
  }
}

if(particle!=null)
{
   particle.display();

    if (particle.body.position.y>760)
    {
          if (particle.body.position.x < 300)
          {
              score=score+500;
              particle=null;
              if ( count>= 5) gamestate ="end";
          }
    }
}

for (var j = 40; j <=width; j=j+50)
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 15; j <=width-10; j=j+50)
{

  plinkos.push(new Plinko(j,175));
}

for (var j = 0; j < particles.length; j++) {

   particles[j].display();
 }
 for (var k = 0; k < divisions.length; k++) {

   divisions[k].display();
 }

for (var k = 0; k <=innerWidth; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));

}

if(score = 5) {
  text = "Game Over";
  gameState = end;
  
}