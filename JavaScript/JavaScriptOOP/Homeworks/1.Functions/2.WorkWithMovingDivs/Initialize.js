window.onload = function initialize () {
	var buttonEllipse = document.getElementById('ellipse');  
	var buttonRect = document.getElementById('rect');  
    var container = document.getElementById('container');    
	container.style.width = 1024 + 'px';
	container.style.height = 600 + 'px';
	container.style.border = '1px solid black';
	buttonEllipse.addEventListener('click', function () {
		movingShapes.add('ellipse');			
	}, false);
	buttonRect.addEventListener('click', function () {
		movingShapes.add('rect');			
	}, false);	
}		