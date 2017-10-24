var canvas = document.getElementById("doodleSpace");
var ctx = canvas.getContext("2d");

centreX = Math.ceil(ctx.canvas.width / 2);
centreY = Math.ceil(ctx.canvas.height / 2);

function drawpoint(x, y) {
	ctx.moveTo(x, y);
	ctx.lineTo(x + 1, y + 1);
	ctx.stroke();
};

function drawcircle(centx, centy, r) {
	o = 0;
	i = 0;
	setInterval(function(){
		//Uncomment the lines (delete the /* and */) below to make it doodle
		//They cause the radius to fluctuate making it look more like a doodle
		/*i ++;
		if (i % 5== 0) {
			r = r + Math.round(Math.random()*1) - 0.5
		}*/
		step = 1 / r;
		o = o + step;
		x = centx + r * Math.cos(o);
		y = centy + r * Math.sin(o);
		drawpoint(x, y);
	}, 1);
};

drawcircle(centreX, centreY, 100);