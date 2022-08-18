
function setup() {
  createCanvas(400,400);

  var box=createSprite(200,200,50,60);
  box.shapeColor="red"

}

function draw() 
{
  background(180);

  if(keyIsDown(RIGHT_ARROW)){

     box.position.x=box.position.x+1
  }

  drawSprites();

}




