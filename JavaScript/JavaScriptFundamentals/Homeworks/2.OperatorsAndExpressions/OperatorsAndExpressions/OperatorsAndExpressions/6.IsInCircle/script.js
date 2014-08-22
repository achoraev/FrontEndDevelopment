function isInCircle() {
    var xCoord = jsConsole.readFloat("#xCoord");
    var yCoord = jsConsole.readFloat("#yCoord");
    var radius = 5;
    if ((xCoord * xCoord) + (yCoord * yCoord) <= (radius * radius)) {
        jsConsole.writeLine("Point is IN the Circle.");
    } else {
        jsConsole.writeLine("Point is OUT of the Circle.");
    }
}