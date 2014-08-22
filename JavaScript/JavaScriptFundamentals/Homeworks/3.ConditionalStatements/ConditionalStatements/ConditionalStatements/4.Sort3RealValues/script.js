function sortNumbers() {
    var firstNumber = jsConsole.readInteger("#firstNum");
    var secondNumber = jsConsole.readInteger("#secondNum");
    var thirdNumber = jsConsole.readInteger("#thirdNum");
    if (firstNumber > secondNumber) {
        if (firstNumber > thirdNumber) {
            if (secondNumber > thirdNumber) {
                jsConsole.writeLine(firstNumber + " " + secondNumber + " " + thirdNumber);
            } else {
                jsConsole.writeLine(firstNumber + " " + thirdNumber + " " + secondNumber);
            }
        } else {
            jsConsole.writeLine(thirdNumber + " " + firstNumber + " " + secondNumber);
        }
    } else if (secondNumber > thirdNumber) {
        if (firstNumber > thirdNumber) {
            jsConsole.writeLine(secondNumber + " " + firstNumber + " " + thirdNumber);
        } else {
            jsConsole.writeLine(secondNumber + " " + thirdNumber + " " + firstNumber);
        }
    } else {
        jsConsole.writeLine(thirdNumber + " " + secondNumber + " " + firstNumber);
    }
}