function check() {
    var xCoord = jsConsole.readInteger("#xCoord");
    var yCoord = jsConsole.readInteger("#yCoord");
    var radius = 3;
    var circleCenterX = xCoord - 1;
    var circleCenterY = yCoord - 1;
    var isInTheCircle = ((circleCenterX * circleCenterX) + (circleCenterY * circleCenterY)) <= (radius * radius);
    var isInTheRectangle = (xCoord >= -1) && (yCoord <= 1) && (xCoord <= 5) && (yCoord >= -1);    
    if (isInTheCircle && !isInTheRectangle) {
        jsConsole.writeLine("The Point is IN the circle and OUT of the rectangle!!!");
    } else {
        jsConsole.writeLine("The Point is OUT of the circle or IN the rectangle!!!");
    }
}