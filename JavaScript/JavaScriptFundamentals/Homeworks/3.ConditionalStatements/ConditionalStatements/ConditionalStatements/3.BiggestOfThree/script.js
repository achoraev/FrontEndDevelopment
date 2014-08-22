function maxNumber() {
    var firstNumber = jsConsole.readInteger("#firstNum");
    var secondNumber = jsConsole.readInteger("#secondNum");
    var thirdNumber = jsConsole.readInteger("#thirdNum");
    var bigNumber = firstNumber;
    if (firstNumber === secondNumber && secondNumber === thirdNumber && firstNumber === thirdNumber) {
        jsConsole.writeLine("Numbers are Equal!!!");
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        bigNumber = secondNumber;
        jsConsole.writeLine("The Biggest number is: " + bigNumber);
    } else if (thirdNumber > secondNumber && thirdNumber > firstNumber) {
        bigNumber = thirdNumber;
        jsConsole.writeLine("The Biggest number is: " + bigNumber);
    } else {
        jsConsole.writeLine("The Biggest number is: " + bigNumber);
    }
}