var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;
var bgImg;

function preload() {
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    mouseImg1 = loadImage("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    catImg3 = loadAnimation("cat4.png")
    mouseImg3 = loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(50,100,100,100);
    cat.addImage(catImg1);

    mouse = createSprite(900,100,100,100);
    mouse.addImage(mouseImg1);
}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width + mouse.width)/ 2 ){

    cat.velocityX = 0 ;
    cat.addAnimation("happyCat",catImg3);
    cat.changeAnimation("happyCat");

    mouse.addAnimation("happyMouse",mouseImg3);
    mouse.changeAnimation("happyMouse");

  }

    drawSprites();
}


function keyPressed(){

  if(keyCode === RIGHT_ARROW){

    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}

if(keyCode === LEFT_ARROW){

    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.velocityX = -3;
}


}
