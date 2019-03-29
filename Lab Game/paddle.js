//Constructor Function
function Paddle(loc,  col, vel){
	this.loc = loc;
	this.vel = vel;
	this.w = 40;
	this.h = 40;
	this.col = col;

	//This function calls other functions
	this.run = function(){
		this.checkEdges();
		this.update();
		this.render();
	}

	this.update = function(){//Update function
		this.loc.add(this.vel);
		if(this.loc.y + w > (point.loc.y - point.h/2) && this.loc.y < (point.loc.y + point.h/2) && this.loc.x < point.loc.x + point.w/2
    && this.loc.x > (point.loc.x-point.w/2)){
			newPoint();
		}
		}

	this.checkEdges = function(){ //Edges function
		if(this.loc.x < 0) this.vel.x = -this.vel.x;
				if(this.loc.x > width) this.vel.x = -this.vel.x;
				if(this.loc.y < 0) this.vel.y = -this.vel.y;
				if(this.loc.y > height) this.vel.y = -this.vel.y;
	}

	this.render = function(){//Render function
		fill(this.col);//Adds color
		rect(this.loc.x, this.loc.y, w, w);//Properties of point


	}
}
//  ++++++++++++++++++++++++++++++++++++++++++++++  end point constructor  function
