function main(){
	var text = "Proin vel               dignissim lacus,   sit amet vestibulum   risus. Etiam         lectus libero, sollicitudin at            arcu eu, consectetur scelerisque enim. Cras tincidunt urna accumsan sem porta, at posuere eros mollis. Vivamus et gravida lacus. Aenean sit amet eros non massa interdum volutpat. Nullam vehicula condimentum elit ultricies auctor. Mauris molestie ultrices tortor, vel facilisis massa placerat vel. ";
	jsConsole.writeLine("Original text:");
	jsConsole.writeLine(text);
	jsConsole.writeLine("");
	jsConsole.writeLine("Replaced white spaces text: ");
	jsConsole.writeLine(replaceWhiteSpaces(text));
}

main();

function replaceWhiteSpaces(text){
    var replaced = '';    
    replaced = text.split(' ');    
    replaced = replaced.join("&nbsp;");
	return replaced;
}