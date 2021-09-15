var  mario, mario_running, mario_collided;
var ground, invisibleGround, groundImg;
var bgImg;

function preload(){
    mario_running = loadAnimation("mario00.png", "mario01.png", "mario03.png");
    mario_collided = loadImage("collided.png")

    groundImg = loadImage("ground2.png");

    bgImg = loadImage("bg.png");
}

function setup(){
    createCanvas(600,350);
    mario = createSprite(50,295,20,50);
    mario.addAnimation("running", mario_running);
    mario.addAnimation("collided", mario_collided);
    mario.scale = 2;

    ground = createSprite(200,330,400,20);
    ground.addImage(groundImg);
    ground.velocityX = -6

    invisibleGround = createSprite(300,300,600,10);
    invisibleGround.visible = false;

}
function draw(){
    background(bgImg);

    mario.collide(invisibleGround);

    if(keyDown ("space")){
        mario.velocityY = -12
    }

    if(ground.x <0){
        ground.x = ground.width/2;
    }
    mario.velocityY = mario.velocityY +0.8;
    drawSprites()

}