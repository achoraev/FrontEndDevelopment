function divided() {
    var number = jsConsole.readInteger("#firstNum");
    if (number % 35 === 0) {
        jsConsole.writeLine("Number CAN be divided by 5 and 7!!!");
    } else {
        jsConsole.writeLine("Number CAN'T be divided by 5 and 7!!!");
    }
}