var w = 40;
var cols, rows;
var paddle; //paddle variable
var point;
var balls = []; //array of boids
var numBalls = 3;
var score = 0;
var gameState = 1;

function preload(){
  soundFormats('mp3', 'ogg');
  mySound = loadSound('http://freesound.org/data/previews/466/466168_9851523-lq.mp3');
}
//function preload(){  //preload function
  //img = loadImage('FilthyFrank.jpeg')
//}
//  This is a comment
//  The setup function function is called once when your program begins
function setup(){//setup function
  var cnv = createCanvas(1800, 1000); //canvas variable\
  cols = width/w; //columns is width/w
  rows = height/w;
  background(20, 20, 20); //creates background color
  cnv.position((windowWidth-width)/2, 30); //canvas position
  paddle = new Paddle(createVector(floor(width/2, floor(height/2))),//creates paddle
  color(255, 0, 0));
  var fx = floor(random(cols)) //random # of columns
  var fy = floor(random(rows)) //random # of rows
  point = new Point(createVector(fx*w, fy*w));

loadBalls(numBalls); //Loads 200 balls

}
function keyPressed(){ //keypressed function
  if(keyCode===UP_ARROW){
    paddle.vel = createVector(0,-10);
  }
  if(keyCode === DOWN_ARROW){
    paddle.vel = createVector(0,10);
  }
  if(keyCode === RIGHT_ARROW){
    paddle.vel = createVector(10,0);
  }
  if(keyCode === LEFT_ARROW){
    paddle.vel = createVector(-10,0);
  }
  if (keyCode === 32 && score===0){
    gameState=2; //Game plays, State of game is 2
  }
}

function newPoint(){ //newFood function
var fx = floor(random(cols)) //random columns for food
var fy = floor(random(rows)) //random rows for food
//for(var i = 0; i < paddle.length; i++){ //for loop for adding segments
  if(point.loc!=paddle.loc){ //food doesn't appear in snake
    point = new Point(createVector(fx*w, fy*w)); //creates vector for food obkect

}


}


//  The draw function is called @ 30 fps
function draw(){ //draw function
  if(gameState === 1){ //Game State 1 starts game
    startGame(); //Game starts
  }else if(gameState === 2){ //Game State 2 plays game
    playGame(); //Game plays
  //}else if(gameState === 3){ //Game State 3 ends game
    //endGame(); //Game ends
  //}
}
}

function startGame(){ //start of game function
    //if(start==="true" && score===0){ //score is 0
      textFont('Lobster'); //font of text
      fill(255,0,0); //color of text
      textAlign(CENTER); //Allignment of the text in centered
      textSize(20); //size of the text
      text("Use arrow keys, avoid the balls and reach green square, press Spacebar to begin",400,300) //Words
   }
 //}

  function playGame(){
  background(20, 20, 20);
  textSize(50);
  text(score, 50, 50);
  fill(0, 255, 0);
  for(var i = 0; i < balls.length; i++){//for loop of balls
    balls[i].run(); //array of balls
    text(score, 50, 50);
  }
  paddle.run(); //calls  function
  point.run();
  for(var i = balls.length-1; i >= 0; i--){//for loop of splicing balls
    if(balls[i].isColliding()){//Calls Collision
      text('Refresh' , 250, 250);
      fill(0, 250, 0)
      mySound.play();
        noLoop();
      }
    }
  }
  //text(score, 50, 50);
  // for each ball call  run






      //if(  balls[i].vel.y < 0){
        //image(img,250, 250);
        //noLoop();
        //numBalls+=3;//Adds 3 balls when ball hits punder the paddle
        //loadBalls(numBalls);


      //}else{
        //balls.splice(i , 1);
        //score = score + 1; //score increases by 1 evertime ball is spliced
        //w = w + 5;
        //if(balls.length === 9){
          //image(img,250, 250);
          //text('Refresh' , 250, 250);
          //fill(0, 250, 0)
            //noLoop();

          //numBalls+=3; //adds 3 balls when number of balls is 0
          //loadBalls(numBalls);

          //if(score > 15){
            //textSize(14);
            //fill(255, 255, 255);
            //noLoop();
          //}
          //noLoop();





function loadBalls(numBalls){ //loads number of balls
  balls = [];
  for(var i = 0; i < numBalls; i++){ //for loop of parameters
    var loc = createVector(random(width), random(height));//location variable
    var vel = createVector(random(-1,2), random(-1, 2));// velocity variable
    var col = color(random(255),random(255), random(255));//color variable
    var b = new Ball(loc,  vel, col); //Parameters of ball
    balls.push(b);//Pushes ball and its patameters

  }

}
