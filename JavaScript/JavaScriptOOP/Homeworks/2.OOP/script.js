// 1. Create a module for drawing shapes using Canvas. Implement the following shapes:
// Rect, by given position (X, Y) and size (Width, Height)
// Circle, by given center position (X, Y) and radius (R)
// Line, by given from (X1, Y1) and to (X2, Y2) positions

var drawingShapes = function (){
	var canvas = document.getElementById("container"),
		ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;
    
	ctx.fillStyle = 'rgb(107, 187, 201)';
	ctx.strokeStyle = 'rgb(0, 0, 201)';

	var drawRect = function(x, y ,Width, Height){		
		ctx.fillRect(x, y, Width, Height);
		ctx.strokeRect(x, y, Width, Height);		
	}

	var drawCircle = function(centerX,centerY,radius){
		ctx.beginPath();		
		ctx.arc(centerX,centerY, radius, 0, 2*Math.PI);		
		ctx.fill();
		ctx.stroke();
	}

	var drawLine = function(startX, startY, endX, endY){		
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.stroke();
	}

	return {
		drawRect: drawRect,
		drawCircle: drawCircle,
		drawLine: drawLine
	}
}();