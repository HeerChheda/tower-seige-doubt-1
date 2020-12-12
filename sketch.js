
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3,block4,block5;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	//create bodies here

	//top layer
	block1 = new LightBlueBlock(330,235);
	
	//middle layer






	Engine.run(engine);
  
}


function draw() {
  
  background("brown");

	block1.display();

 
}




