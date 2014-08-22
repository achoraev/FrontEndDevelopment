function calcArea() {
    var sideA = jsConsole.readInteger("#sideA");
    var sideB = jsConsole.readInteger("#sideB");
    var height = jsConsole.readInteger("#height");
    var area = ((sideA + sideB) / 2) * height;
    jsConsole.writeLine("Area is: " + area);
}