function calcQuadratic() {
    var coefA = jsConsole.readInteger("#coefA");
    var coefB = jsConsole.readInteger("#coefB");
    var coefC = jsConsole.readInteger("#coefC");
    var equal = ((-coefB) + (Math.sqrt((coefB * coefB) - (4 * coefA * coefC)))) / (2 * coefA);
    var equalminus = ((-coefB) - (Math.sqrt((coefB * coefB) - (4 * coefA * coefC)))) / (2 * coefA);
    var diskrim = ((coefB * coefB) - (4 * coefA * coefC));
    if (diskrim < 0) {
        jsConsole.writeLine("D is: " + diskrim);
        jsConsole.writeLine("No real roots.");
    }
    else if (diskrim == 0) {
        jsConsole.writeLine("D is: " + diskrim);
        jsConsole.writeLine("Have one real root.");
        jsConsole.writeLine(equal);
    }
    else if (diskrim > 0) {
        jsConsole.writeLine("D is: " + diskrim);
        jsConsole.writeLine("Have two real roots.");
        jsConsole.writeLine(equal);
        jsConsole.writeLine(equalminus);
    }
}