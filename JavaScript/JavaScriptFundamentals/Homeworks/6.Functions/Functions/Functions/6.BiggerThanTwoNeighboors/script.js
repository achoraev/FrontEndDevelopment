var arrayOfIntegers = [4, 3, 1, 4, 2, 5, 4, 5, 4, 6, 5, 5, 6, 4, 8, 6, 4, 8, 6, 8];

function CheckNeighbors(position) {
    var position = jsConsole.readInteger("#numberN");
    if (position < 1 || position > arrayOfIntegers.length - 1) {
        jsConsole.writeLine("At that position no two neighbors!!!");
        return false;
    } else if (arrayOfIntegers[position] > arrayOfIntegers[position - 1] &&
               arrayOfIntegers[position] > arrayOfIntegers[position + 1] &&
               position > 0 && position < arrayOfIntegers.length - 1) {
        jsConsole.writeLine("Number in position: " + position + " is " + arrayOfIntegers[position] + " and is bigger than neighbors.");
        return true;
    }
    jsConsole.writeLine("Number in position: " + position + " not bigger than neighbors.");
    return false;
}