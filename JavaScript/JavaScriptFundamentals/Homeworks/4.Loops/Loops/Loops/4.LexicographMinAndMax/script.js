for (var prop in document) {
    jsConsole.writeLine("Docs: " + prop + " = " + document[prop]);
}

jsConsole.writeLine("=======================================================================");

for (var prop in window) {
    jsConsole.writeLine("Window: " + prop + " = " + window[prop]);
}

jsConsole.writeLine("=======================================================================");

for (var prop in navigator) {
    jsConsole.writeLine("Navigator: " + prop + " = " + navigator[prop]);
}