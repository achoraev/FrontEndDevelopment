function showSign() {
    var firstNumber = jsConsole.readInteger("#firstNum");
    var secondNumber = jsConsole.readInteger("#secondNum");
    var thirdNumber = jsConsole.readInteger("#thirdNum");
    if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
        jsConsole.writeLine("The product is positive!!!");
    } else if ((firstNumber < 0 && secondNumber < 0 && thirdNumber >= 0)
           || (firstNumber < 0 && secondNumber >= 0 && thirdNumber < 0)
           || (firstNumber >= 0 && secondNumber < 0 && thirdNumber < 0)) {
        jsConsole.writeLine("The product is positive!!!");
    }
    else if ((firstNumber < 0 || secondNumber < 0 || thirdNumber < 0)
        || (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0)) {
        jsConsole.writeLine("The product is negative!!!");
    }
}