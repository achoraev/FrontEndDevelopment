function compareChars() {
    var arr1 = "dfsdgdgsf";
    var arr2 = "abdjKjdijdiLjiei";
    var minLength = arr1.length;

    if (arr2.length < arr1.length) {
        minLength = arr2.length;
    }

    jsConsole.writeLine("First string: " + arr1);
    jsConsole.writeLine("Second string: " + arr2);

    for (var i = 0; i < minLength; i++) {
        if (arr1[i] > arr2[i]) {
            jsConsole.writeLine("First array of chars is greater!!! Char: " + arr1[i] + " > " + arr2[i]);
            break;
        } else if (arr1[i] < arr2[i]) {
            jsConsole.writeLine("Second array of chars is greater!!! Char: " + arr2[i] + " > " + arr1[i]);
            break;
        } 
    }
}

compareChars();

