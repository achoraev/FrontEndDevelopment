function oddOrEven() {
    var number = jsConsole.readInteger("#firstNum");
    jsConsole.writeLine(number % 2 === 0 ? "Number " + number + " is Even!!!" : "Number " + number + " is Odd!!!");
}