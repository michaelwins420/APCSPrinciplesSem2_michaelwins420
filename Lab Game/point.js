//Michael Costantini food.js
function Point(loc){//Food constructor function
  this.loc=loc;
  this.w = 40;
	this.h = 40; //loaction of food variable



  this.run = function(){ //runs update and render function
    this.update();
    this.render();
  }

  this.update = function(){ //update function
  }

  this.render = function(){ //render function
    fill(0,200,0)//color of food
    rect(this.loc.x, this.loc.y, w, w);//shape of food
  }
}
