function checkBitThree() {
    var number = jsConsole.readInteger("#firstNum");
    var mask = (1 << 3);
    var numMask = (number & mask);
    if (numMask !== 0) {
        jsConsole.writeLine("The 3 bit is: 1");
    }else {
        jsConsole.writeLine("The 3 bit is: 0");
    }
}