function main() {   
    var text = 'Please visit <a href="http://academy.telerik. com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.';
    var replaced = replaceHyperlink(text);
    jsConsole.writeLine(replaced);
}

main();

function replaceHyperlink(text) {
    var resultTotal = text.split('<a href');
    resultTotal = resultTotal.join('[URL');
    resultTotal = resultTotal.split('</a>');
    resultTotal = resultTotal.join('[/URL]');
    resultTotal = resultTotal.split('>');
    resultTotal = resultTotal.join(']');
    return "<p>" + resultTotal + "</p>"
}