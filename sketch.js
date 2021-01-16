var cat,catImage;
var mouse,mouseImage;
var garden,gardenImage;

function preload() {
    //load the images here
    catImage = loadImage ("tomOne.png","tomTwo.png",
    "tomThree.png","tomFour.png");
    mouseImage = loadImage ("jerryOne.png","jerryTwo.png",
    "jerryThree.png","jerryFour.png");
    gardenImage = loadImage ("garden.png")
}

function setup(){
    createCanvas(800,800);

    garden = createsprite (0,0,800,800);
    garden . addImage (gardenImage);
    garden . scale = 0.3;
    //create tom and jerry sprites here
    cat = createSprite (400,790,20,20);
    cat . addImage ("tomOne",catImage);
    cat . scale = 0.5;

    mouse = createSprite (50,50,20,20);
    mouse . addImage ("jerryOne",mouseImage);
    mouse . scale = 0.3;

}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
    //cat colide
    cat.colide (leftEdge);
    cat.colide (rightEdge);
    cat.colide (topEdge);
    cat.colide (bottomEdge);
    // mouse colide
    mouse.colide (leftEdge);
    mouse.colide (rightEdge);
    mouse.colide (topEdge);
    mouse.colide (bottomEdge);
createEdges ();
    drawSprites();

}


function keyPressed(){

    Text(mouseX + ','+ mouseY,10,45);

    if (cat .x - mouse.x < (cat.width - mouse.width)/2)
//For moving and changing animation write code here

if (keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("tomTwo","tomThree",catImage);
    cat.changeAnimation("tomTwo","tomThree");
}
if (cat.isTouching(mouse)){
    cat.addAnimation("tomFour",catImage);
    cat.changeAnimation("tomFour");
    mouse.addAnimation("jerryTwo","jerryThree");
    mouse.changeAnimation("jerryFour");
}
}

 