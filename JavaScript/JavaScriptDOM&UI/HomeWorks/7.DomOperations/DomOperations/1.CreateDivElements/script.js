window.onload = function addDivElements() {
    var container = document.getElementById('container'),
        colors = ['red', 'yellow', 'purple', 'orange', 'black', 'blue', 'yellowgreen', 'lightblue'],
        numberOfDivs = 15,
        color,
        len = colors.length,
        i;

    for (i = 0; i < numberOfDivs; i++) {
        var divElements = document.createElement('div');

        divElements.className = 'div-elements';
        divElements.style.display = 'inline-block';
        // create child strong        
        divElements.innerHTML = '<strong>' + 'div' + '</strong>';
        // width and height
        divElements.style.width = random(20, 100) + 'px';
        divElements.style.height = random(20, 100) + 'px';
        // background color        
        color = colors[random(0, len)];
        divElements.style.background = color;
        // font color
        color = colors[random(0, len)];
        divElements.style.color = color;
        // border radius
        divElements.style.borderRadius = random(5, 20);
        // border color
        color = colors[random(0, len)];        
        divElements.style.borderColor = color;
        // border width
        divElements.style.border = random(1, 20) + 'px solid' ;

        container.appendChild(divElements);
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;        
    }
}