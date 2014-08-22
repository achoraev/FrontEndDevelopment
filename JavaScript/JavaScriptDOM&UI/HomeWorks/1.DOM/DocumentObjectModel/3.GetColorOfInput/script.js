function setValueColor () {
	var color = document.getElementsByTagName('input')[0];    
	console.log(color.value);
	document.body.style.backgroundColor = color.value;
}