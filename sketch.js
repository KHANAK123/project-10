var weight=[35,58,45,12];
var ship1 ,ship1_running;
function weight_add(){
  var sum= weight[0]+weight[1]+weight[2]+weight[3];
  console.log(sum)
}
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
}

function setup(){
  createCanvas(400,400);
  var sea=createSprite(400,400)
  sea.sea.png(seaImg)
  if (sea.x< 0){
    sea.x = sea.width/2;
  }
}

function draw() {
  background("sea.png");
 
}