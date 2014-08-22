// 2. Create a module that works with moving div nodes. Implement functionality for:
// Add new moving div element to the DOM
// The module should generate random background, font and border colors for the div element
// All the div elements are with the same width and height
// The movements of the div nodes can be either circular or rectangular
// The elements should be moving all the time

var movingShapes = function (){	
	var add = function(movement) {
		if (movement == 'ellipse') {
			createEllipseMovement();
		} else if (movement == 'rect') {
			createRectangleMovement();
		} else {
			alert('Wrong movement!!!');
		}		
	};	
	
	function createRectangleMovement() {		
		var div = document.createElement("div"),			
			centerX = 40,
			centerY = 40,
			direction = "right";		
		styleDivs(div);		
		container.appendChild(div);				
	
	var timers = setInterval(function moveRectangleDivs() {
			if (direction === "right") {
				centerX += 5;
				if (centerX > 800) {
				direction = "down";
				}				
			}   
			if (direction === "down") {				
				centerY += 5;
				if (centerY > 500) {
				direction = "left";
				}
			}
			if (direction === "left") {				
				centerX -= 5;
				if (centerX < 50) {
				direction = "up";				
				}	
			}
			if (direction === "up") {				
				centerY -= 5;
				if (centerY < 50) {
				direction = "right";
				}				
			}
			
			div.style.left = centerX + 'px';
			div.style.top = centerY + 'px';   
		}, 50);
	}		
	
	function createEllipseMovement() {		
		var div = document.createElement("div"),
			currentAngle = 0,
			centerX = 300, 
			centerY = 300, 
			radius = 200;		
		styleDivs(div);		
		container.appendChild(div);				
	
	var timer = setInterval(function moveDivs() {
			currentAngle++;
			if (currentAngle === 360) {
				currentAngle = 0;
			}
			
			var top = centerY + Math.sin((2 * Math.PI / 180) * (currentAngle)) * radius;
			var left = centerX + Math.cos((2 * Math.PI / 180) * (currentAngle)) * radius/2;                
			
			div.style.top = top + 'px';
			div.style.left = left + 'px';                
		}, 30);
	}		
			
	function styleDivs (element){
		element.innerHTML = '<strong>div</stong>';
		element.style.position = 'absolute';
		element.style.textAlign = 'center';
		element.style.width = 50+'px';
		element.style.height = 50+'px';			
		element.style.border = '4px solid';						
		element.style.borderColor = randomColor(); 
		element.style.color = randomColor();		
		element.style.backgroundColor = randomColor(); 
	}

	function randomColor(){
		var red = random(0, 255);
		var green = random(0, 255);
		var blue = random(0, 255);
		return "rgb(" + red + "," + green + "," + blue + ")";
	}

	function random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	return {
		add: add
	}
}();