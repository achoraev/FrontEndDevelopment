var textArea = document.getElementsByTagName('textarea')[0];
var font = document.getElementById('change-font');
var background = document.getElementById('change-background');

font.addEventListener('change', function (ev){	
	textArea.style.color = font.value;
});

background.addEventListener('change', function (ev){	
	textArea.style.background = background.value;
},false);