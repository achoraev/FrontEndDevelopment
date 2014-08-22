countDivs();

function countDivs(){
	var count = document.getElementsByTagName("div").length;
	jsConsole.writeLine("The number of div tags in your page is: " + count);
}