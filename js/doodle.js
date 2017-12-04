//finds the canvas element in the html
var canvas = document.getElementById("doodleSpace");
var ctx = canvas.getContext("2d");

//finds the centre of the canvas element
// var centreX = Math.ceil(ctx.canvas.width / 1);
// var centreY = Math.ceil(ctx.canvas.height / 1);

var centreX = Math.ceil(0);
var centreY = Math.ceil(100);

//the canvas doesn't have an in built point drawing fuction
//so instead I've used the line drawing function to draw a small line which is essentially a point
function drawpoint(x, y) {
	ctx.moveTo(x, y);
	ctx.lineTo(x + 1, y + 1);
	ctx.stroke();
};


//draws a circle
//centx is the x coordinate of the centre, centy is the y coordinate of the centre and r is the radius of the circle
function drawcircle(centx, centy) {
	//o represents theta, or the angle to be passed into the equations below
	// var o = 0;

	//i is a counter
	var i = 0;
	var r = 1;

	//using the setInterval function to call the draw point function, with different coordinates
	//every millisecond - this makes the line appear to be drawn on the screen adding to the
	//doodle effect


	setInterval(function(){

		i ++;
		//the larger this variable is - the smoother the doodle will be
		var smoothness = 1;

		if (i % smoothness == 0) {
			//This causes the radius to fluctuate making it look more like a doodle
			r = r + Math.round(Math.random()*1) - 0.5;
		}

		//this variable determines how filled in the line drawn is - if the line appears too dotted reduce this value
		// if the line is taking too long to draw then increase this value
		// var step = 1 / (r * 3);

		//increments the angle
		// o = o + step;

		// draws a flower
		// works out the coordinates of the point to be drawn relative to the center point provided
		// var x = centx + r * (Math.cos(4 * o)) * Math.cos(o);
		// var y = centy + r * (Math.cos(4 * o)) * Math.sin(o);

		// draws a circle
		// var x = centx + r * Math.cos(o);
		// var y = centy + r * Math.sin(o);

		//draws a line
		var x = centx++ + r;
		var y = centy + r;

		console.log("x", x);
		// console.log("y", y);

		//calls the drawpoint function
		drawpoint(x, y);
	// change the value below to adapt the speed of the drawing - the larger the value the slower the speed
	// it is a delay specified in milliseconds
}, 1);
};

//calls the draw circle function
drawcircle(centreX, centreY);
