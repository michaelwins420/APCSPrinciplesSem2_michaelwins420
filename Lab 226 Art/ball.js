function Ball(loc, vel, rad, col){
	this.loc = loc;
	this.vel = vel;
	this.rad = rad;
	this.col = col;
	this.acc = createVector(0, .1);


	//This function calls other functions
	this.run = function(){
		this.checkEdges();
		this.update();
		this.render();
		}


	this.update = function(){
				var attForce = p5.Vector.sub(b1.loc, this.loc);
		attForce.normalize();
		attForce.mult(3);
		this.vel.add(this.attForce);
		this.loc.add(this.vel);
		var steeringForce = p5.Vector.sub(b1.loc, this.loc);
		steeringForce.normalize();
		steeringForce.mult(3);
		this.vel.add(this.steeringForce);
		this.loc.add(this.vel);
	    //  scales the magnitude to 0.5

		}

	this.checkEdges = function(){
		if(this.loc.x < 0) this.vel.x = -this.vel.x;
		if(this.loc.x > width) this.vel.x = -this.vel.x;
		if(this.loc.y < 0) this.vel.y = -this.vel.y;
		if(this.loc.y > height) this.vel.y = -this.vel.y;
		}

	this.render = function(){
		fill(this.col);
		stroke(22, 100, 222);
		for(var i=0; i<balls.length; i++){

		line(this.loc.x, this.loc.y, balls[i].loc.x, balls[i].loc.y);
		}

	}
}
