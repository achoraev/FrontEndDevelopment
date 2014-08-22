function maxNumber() {
    var firstNumber = jsConsole.readInteger("#firstNum");
    var secondNumber = jsConsole.readInteger("#secondNum");
    var thirdNumber = jsConsole.readInteger("#thirdNum");
    var fourthNumber = jsConsole.readInteger("#fourthNum");
    var fifthNumber = jsConsole.readInteger("#fifthNum");
    var bigNumber = firstNumber;
    if (firstNumber === secondNumber &&
        secondNumber === thirdNumber &&
        thirdNumber === fourthNumber &&
        fourthNumber === fifthNumber) {
        jsConsole.writeLine("The numbers are equal!!!");
    } else {
        if (bigNumber < secondNumber) {
            bigNumber = secondNumber;
        }
        if (bigNumber < thirdNumber) {
            bigNumber = thirdNumber;
        }
        if (bigNumber < fourthNumber) {
            bigNumber = fourthNumber;
        }
        if (bigNumber < fifthNumber) {
            bigNumber = fifthNumber;
        }
        jsConsole.writeLine("The Biggest number is: " + bigNumber);
    }
}