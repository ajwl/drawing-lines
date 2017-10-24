//finds the canvas element in the html
var canvas = document.getElementById("doodleSpace");
var ctx = canvas.getContext("2d");

//finds the centre of the canvas element
centreX = Math.ceil(ctx.canvas.width / 2);
centreY = Math.ceil(ctx.canvas.height / 2);

//the canvas doesn't have an in built point drawing fuction
//so instead I've used the line drawing function to draw a small line which is essentially a point
function drawpoint(x, y) {
	ctx.moveTo(x, y);
	ctx.lineTo(x + 1, y + 1);
	ctx.stroke();
};


//draws a circle
//centx is the x coordinate of the centre, centy is the y coordinate of the centre and r is the radius of the circle
function drawcircle(centx, centy, r) {
	//o represents theta, or the angle to be passed into the equations below
	o = 0;
	
	//i is a counter
	i = 0;
	
	//using the setInterval function to call the draw point function, with different coordinates
	//every millisecond - this makes the line appear to be drawn on the screen adding to the
	//doodle effect
	setInterval(function(){
		//Uncomment the lines (delete the /* and */) below to make the code doodle
		
		/*i ++;
		//the larger this variable is - the smoother the doodle will be
		smoothness = 5
		
		if (i % smoothness == 0) {
			//This causes the radius to fluctuate making it look more like a doodle
			r = r + Math.round(Math.random()*1) - 0.5
		}*/
		
		//this variable determines how filled in the line drawn is - if the line appears too dotted reduce this value
		// if the line is taking too long to draw then increase this value 
		step = 1 / r;
		//increments the angle
		o = o + step;
		//works out the coordinates of the point to be drawn relative to the center point provided
		x = centx + r * Math.cos(o);
		y = centy + r * Math.sin(o);
		//calls the drawpoint function
		drawpoint(x, y);
	// change the value below to adapt the speed of the drawing - the larger the value the slower the speed
	// it is a delay specified in milliseconds
	}, 1);
};

//calls the draw circle function
drawcircle(centreX, centreY, 100);
