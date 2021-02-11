//Create variables here
var dog;
var dogImage1,dogImage2;
var database;
var foodStock,foodS;

function preload()
{
	//load images here
  dogImage1=loadImage("images/dogImg.png");
  dogImage2=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(500,300,100,100);
  dog.addImage(dogImage1);
  dog.scale=.6;

  foodStock=database.ref('food');
  foodStock.on("value",readBottles);
  
}
function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogImage2);
  writeBottles(foodS);
}
  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
text("Food Remaining: "+ foodS, 550,50);
text("Press Up_Arrow to feed Drago",50,650)
}
//function to read value from database
function readBottles(data){
  foodS=data.val();
} 
//function to update food value in database
function writeBottles(food){
if(food>0){
  food=food-1;
}
database.ref('/').update({
  food:food
});
}
