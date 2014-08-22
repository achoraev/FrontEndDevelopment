function returnLastDigit () {
	var number = jsConsole.readInteger("#numberN");
	var lastWord = "",
		lastDigit = parseInt(number % 10);
	switch (lastDigit)
	{
		case 0: lastWord = "zero"; break; 
		case 1: lastWord = "one"; break;   
		case 2: lastWord = "two"; break;   
		case 3: lastWord = "three"; break;    
		case 4: lastWord = "four"; break;  
		case 5: lastWord = "five"; break;   
		case 6: lastWord = "six"; break;    
		case 7: lastWord = "seven"; break;    
		case 8: lastWord = "eight"; break;    
		case 9: lastWord = "nine"; break;		
	}
	
	jsConsole.writeLine("Last digit in English: " + lastWord);
}