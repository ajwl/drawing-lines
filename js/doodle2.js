
function runCode2(){
	const canvas = document.getElementById("doodleSpace1");
	const ctx = canvas.getContext("2d");


	  function drawLine(startX, startY){
	  	let i = 0;
	  	let f = 0;

	  	const lineTimer = setInterval(function(){
	  		i++;
	  		const smoothness = 2;
	  		if(i % smoothness === 0 ){
	  			f = f + Math.round(Math.random()*1) - 0.5;
	  		}
	  		x = startX++ + f;
	  		y = startY + f;
	  		drawpoint(x, y);
	  		if(x > 500) {
	  			clearInterval(lineTimer);
	  		}
	  	}, 10)
	  }

	  // all the lines set off at once
	  function startDrawing(){
	  	let yPoint = 0;
	  	for(let i =0; i < 25; i++){
	  		yPoint += 20;
	  		drawLine(0, yPoint);
	  	}
	  }

	  startDrawing();

}
