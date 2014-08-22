function calcArea() {
    var firstNumber = jsConsole.readInteger("#firstNum");
    var secondNumber = jsConsole.readInteger("#secondNum");
    var area = firstNumber * secondNumber;
    jsConsole.writeLine("Area is: " + area);
}