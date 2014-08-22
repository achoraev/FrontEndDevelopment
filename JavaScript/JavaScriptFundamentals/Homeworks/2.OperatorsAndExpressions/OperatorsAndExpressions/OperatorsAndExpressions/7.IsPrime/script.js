function isPrime() {
    var number = jsConsole.readInteger("#firstNum");
    if ((number > 1) && (number <= 100)) {
        if ((number === 2) || (number === 3) || (number === 5) || (number === 7)) {
            jsConsole.writeLine("Number " + number + " is Prime ");
        } else {
            if (((number % 2) !== 0) && ((number % 3) !== 0) && ((number % 5) !== 0) && ((number % 7) !== 0)) {
                jsConsole.writeLine("Number " + number + " is Prime ");
            } else {
                jsConsole.writeLine(number + " not Prime ");
            }
        }
    } else {
        jsConsole.writeLine("Number is not Between 1 and 100");
    }
}