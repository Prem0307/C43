const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var bg;
var ground;
var tank1,tank2;

function preload(){
bg=loadImage("Images/background.png")

}
function setup(){
    createCanvas(displayWidth,displayHeight);
myEngine=Engine.create();
myWorld=myEngine.world;


ground=new Ground(650,650,displayWidth,10)
tank1=new Tank(250,620)
tank2=new Tank2(800,620)
}
function draw(){
background(bg);


tank1.display();
tank2.display();
text(mouseX+" "+mouseY,mouseX,mouseY);
}

