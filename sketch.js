var bg ,bgIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	


    stroke("white");
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1250,600);
	paperObject=new paper(400,550,40)
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(8,100,255);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  drawSprites();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}
