var space, shooterPlane
var spaceImg, PlaneImg



function preload(){

 spaceImg = loadImage("bg.png")
 PlaneImg = loadImage("plane.png")

}

function setup() {
 createCanvas(windowWidth, windowHeight)
 
 space =createSprite(300,300,300,300);
 space.addImage(spaceImg);
 
 shooterPlane = createSprite(10,10,300,300)
 shooterPlane.addImage(PlaneImg)
 shooterPlane.scale = 0.5
}

function draw() {
 
   shooterPlane.x = World.mousex
 
 

    


drawSprites();
    
}