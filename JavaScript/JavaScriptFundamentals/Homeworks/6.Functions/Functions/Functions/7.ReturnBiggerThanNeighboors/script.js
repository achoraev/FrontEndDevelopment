var arrayOfIntegers = [4, 3, 1, 4, 2, 5, 4, 5, 4, 6, 5, 5, 6, 4, 8, 6, 4, 8, 6, 8];
//return -1
//var arrayOfIntegers = [4, 3, 1];

function CheckNeighbors() {
    var indexOfPosition = 0,
        len = arrayOfIntegers.length;

    for (var i = 1; i < len; i++) {       
        if (arrayOfIntegers[i] > arrayOfIntegers[i - 1] &&
            arrayOfIntegers[i] > arrayOfIntegers[i + 1]) {
            indexOfPosition = i;            
            return jsConsole.writeLine("Index is: " + indexOfPosition);
        } else if (indexOfPosition === 0 && i === (len-1)) {
            return jsConsole.writeLine("-1");
        }        
    }
}
CheckNeighbors();