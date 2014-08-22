function FindWordInText(text, word){	
	var result = 0,
		found = 0;
		
	for (var i = 0; i < text.length; i++){
		found = lowerText.indexOf(word, found + 1);
		if (found >= 0)
		{
			result++;
		}
		else
		{
			break;
		}
	}
	jsConsole.writeLine("The result is: " + result);
}
var text = "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
    lowerText = text.toLowerCase(),
	wordToSearch = "in";
    FindWordInText(text, wordToSearch);