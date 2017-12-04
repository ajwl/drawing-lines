//finds the canvas element in the html
var canvas = document.getElementById("doodleSpace");
var ctx = canvas.getContext("2d");

var startX = 0;
var startY = 100;

//the canvas doesn't have an in built point drawing fuction
//so instead I've used the line drawing function to draw a small line which is essentially a point
function drawpoint(x, y, colour) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 1, y + 1);
	ctx.strokeStyle = colour;
	ctx.lineWidth = 20;
	ctx.stroke();
	ctx.closePath();
};

function drawLine(startX, startY, colour){
	let i = 0;
	let f = 0;

	return new Promise((res,rej) => {
		const lineTimer = setInterval(function(){
			i++;

			const smoothness = 2;
			if(i % smoothness === 0 ){
				f = f + Math.round(Math.random()*1) - 0.5;
			}

			x = startX++ + f;
			y = startY + f;

			drawpoint(x, y, colour);

			if(x > 500) {
				clearInterval(lineTimer);
				res();
			}
		}, 2)
	}
)}

function findColour(index){
	if(index % 3 === 0) {
		return '#999999';
	}
	else if(index % 2 === 0){
		return '#555555';
	}
	return '#111111';
}

// all the lines set off at once
async function startDrawing(){
	let yPoint = 0;
	for(i=0; i <25; i++){
		yPoint += 20;
		let colour = findColour(i);
		await drawLine(0, yPoint, colour);
	}
}

startDrawing();


// 	----------- PUT NEW STUFF HERE ----------------- //


// function drawLine(startX, startY){
// 	let i = 0;
// 	let f = 0;
//
// 	const lineTimer = setInterval(function(){
// 		i++;
// 		const smoothness = 2;
// 		if(i % smoothness === 0 ){
// 			f = f + Math.round(Math.random()*1) - 0.5;
// 		}
// 		x = startX++ + f;
// 		y = startY + f;
// 		drawpoint(x, y);
// 		if(x > 500) {
// 			clearInterval(lineTimer);
// 		}
// 	}, 10)
// }
//
// // all the lines set off at once
// function startDrawing(){
// 	let yPoint = 0;
// 	for(let i =0; i < 25; i++){
// 		yPoint += 20;
// 		drawLine(0, yPoint);
// 	}
// }
//
// startDrawing();
