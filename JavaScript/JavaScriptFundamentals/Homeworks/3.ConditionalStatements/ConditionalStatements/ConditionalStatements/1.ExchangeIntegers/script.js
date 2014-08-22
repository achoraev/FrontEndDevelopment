function exchangeInt() {
    var firstNumber = jsConsole.readInteger("#firstNum");
    var secondNumber = jsConsole.readInteger("#secondNum");
    var bigger = firstNumber;
    if (firstNumber > secondNumber) {
        jsConsole.writeLine("Number " + firstNumber + " is bigger than " + secondNumber);
        firstNumber = secondNumber;
        secondNumber = bigger;
        jsConsole.writeLine("First number now is: " + firstNumber);
        jsConsole.writeLine("Second number now is: " + secondNumber);
    } else
        if (firstNumber === secondNumber) {
            jsConsole.writeLine("Numbers are equal!!!");
        } else {
            jsConsole.writeLine("First number NOT bigger than second!!!");
        }
}