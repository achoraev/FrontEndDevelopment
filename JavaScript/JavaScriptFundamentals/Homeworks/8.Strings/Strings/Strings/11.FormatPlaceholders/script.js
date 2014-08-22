function main() {
    jsConsole.writeLine('var format = "{0}, {1}, {0} text {2}";');
    var format = "{0}, {1}, {0} text {2}";
    jsConsole.writeLine('var str = stringFormat(format, 1, "Pesho", "Gosho");');
    // to test
    var str = stringFormat("{0} {1} {2} {3} {4} {5} + {6}" , 1, "Pesho", "Gosho", "Bai Ivan", 16, "Acho", "Reni");
    // var str = stringFormat(format, 1, "Pesho", "Gosho");
    // var str = stringFormat("Hello {0}!", "Peter");
    jsConsole.writeLine('result:');
    jsConsole.writeLine(str);
}

main();

function stringFormat() {
    if (arguments.length == 0) {
        return undefined;
    }
    var formated = String(arguments[0]);

    for (var i = 1; i < arguments.length; i++) {
        var replaceString = "{" + (i - 1) + "}";
        while (formated.indexOf(replaceString) > -1) {
            formated = formated.replace(replaceString, arguments[i]);
        }
    }

    return formated;
}