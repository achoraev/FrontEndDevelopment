function findSubstring() {
    var text =
	"We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";
    // second edition
    var lowerText = text.toLowerCase();
    var result = 0;
    var found = 0;

    for (var i = 0; i < text.length; i++) {
        found = lowerText.indexOf("in", found + 1);
        if (found >= 0) {
            result++;
        } else {
            break;
        }
    }
    jsConsole.writeLine("The result is: " + result);
}

findSubstring();