var b1;
var balls = [];
//  This is a comment
//  The setup function function is called once when your program begins
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  b1 = new Ball(createVector(width/2, height/2),
                createVector(0,0),
                25,
                color(0, 0, 0)
              );
  loadBalls(20);

}


//  The draw function is called @ 30 fps
function draw(){
  background(20, 20, 20, 10);
  //b1.run();
  for(var i = 0; i < balls.length; i++){
  balls[i].run();
  }

}

function loadBalls(numBalls){

  for(var i = 0; i < numBalls; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,30), random(-3, 30));
    var rad = random(50, 100);
    var col = color(random(255),random(255), random(255));
    balls.push(new Ball(loc, vel, rad, col));
  }

}
