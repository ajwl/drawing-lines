
function runCode1(){
	//finds the canvas element in the html
	const canvas = document.getElementById("doodleSpace1");
	const ctx = canvas.getContext("2d");

	//the canvas doesn't have an in built point drawing fuction
	//so instead I've used the line drawing function to draw a small line which is essentially a point
	function drawpoint(x, y) {
		ctx.moveTo(x, y);
		ctx.lineTo(x + 1, y + 1);
		ctx.stroke();
	};


	function drawLine(startX, startY){
		var i = 0;
		var f = 0;
		setInterval(function(){
				i++;
				const smoothness = 2; //the larger this variable is - the smoother the doodle will be
				if(i % smoothness === 0 ){
					f = f + Math.round(Math.random()*1) - 0.5;
				}
				var x = startX++ + f;
				var y = startY + f;
				drawpoint(x, y);
		 }, 10)
	}

	// calls the drawLine function
	drawLine(0, 20);
}
