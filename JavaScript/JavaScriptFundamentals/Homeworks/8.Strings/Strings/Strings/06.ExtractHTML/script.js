function main() {
    var text = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
    jsConsole.writeLine(text);
    jsConsole.writeLine(extractHTML(text));
}

main();

function extractHTML(text) {
    var extracted = '';

    for (var i = 0; i < text.length; i++) {
        if (text[i] === '<') {
            extracted += " ";
            i = text.indexOf(">", i);            
        } else {
            extracted += text[i];
        }
    }
    return extracted;
}