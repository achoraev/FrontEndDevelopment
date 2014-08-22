var colors = ['yellow', 'purple', 'orange', 'blue', 'yellowgreen'],
    len = colors.length,
    color;

window.onload = function fiveDivs() {
    setInterval("createDivs()", 100);
}

function clear() {
    document.body.innerHTML = "";
}

var addAngle = 0;
function createDivs() {
    clear();
    var centerX = 400;
    var centerY = 200;
    var radius = 150;
    for (var i = 0; i < 5; i++) {
        var currentAngle = 72 * i + addAngle;
        createDiv(centerX, centerY, radius, currentAngle)
    }
    addAngle += 2;
}

function createDiv(centerX, centerY, radius, angle) {
    var div = document.createElement("div");
    div.style.top = (centerY + radius * Math.sin(angle * Math.PI / 180)) + "px";
    div.style.left = (centerX + radius * Math.cos(angle * Math.PI / 180)) + "px";
    // styles
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = '2px solid black';
    div.style.borderRadius = '10px';
    color = colors[random(0, len)];
    div.style.backgroundColor = color;
    document.body.appendChild(div);
}
// set random colors
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}