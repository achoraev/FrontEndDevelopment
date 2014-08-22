function checkThirdDigits() {
    var firstNumber = jsConsole.readInteger("#firstNum");
    var result = parseInt(firstNumber / 100) % 10;
    if (result === 7) {
        jsConsole.writeLine(firstNumber + " -> True");
    } else {
        jsConsole.writeLine(firstNumber + " -> False");
    }
}