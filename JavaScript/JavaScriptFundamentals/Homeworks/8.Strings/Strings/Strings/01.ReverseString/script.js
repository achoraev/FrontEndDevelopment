function reverseString() {
    var inputString = jsConsole.read("#inputString");
    var result = [];

    for (var i = inputString.length; i >= 0; i--) {
        result.push(inputString[i]);
    }
    return jsConsole.writeLine("reversed string: " + result.join(''));
}