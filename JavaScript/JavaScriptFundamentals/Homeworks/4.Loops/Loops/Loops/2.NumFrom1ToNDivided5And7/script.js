function printNumbers() {
    var numberN = jsConsole.readInteger("#numberN");
    for (var i = 1; i <= numberN; i++) {
        if (!(i % 21 === 0)) {
            jsConsole.write(i + ", ");
        }
    }
}