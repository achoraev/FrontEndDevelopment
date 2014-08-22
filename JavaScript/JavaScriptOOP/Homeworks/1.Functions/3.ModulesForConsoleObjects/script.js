// 3. Create a module to work with the console object.Implement functionality for:
// Writing a line to the console 
// Writing a line to the console using a format
// Writing to the console should call toString() to each element
// Writing errors and warnings to the console with and without format

var specialConsole = function (){
	function placeHolder(input) {
        var format = input[0];
        for (var i = 0; i < 30; i++) {
            while (format.indexOf('{' + i + '}') != -1) {
                format = format.replace('{' + i + '}', input[i + 1]);
            }
        }
        return format;
    }
	
	var writeLine = function (message, element){		
		var argsLenght = arguments.length;
		if (argsLenght == 1) {			
			console.log(message.toString());
		} else {			
			var output = placeHolder(arguments);			
			console.log(output.toString());
		}		
	};
	
	var writeError = function (message, element){		
		var argsLenght = arguments.length;
        if (argsLenght == 1) {
            console.error(message.toString());
        } else {
            var output = placeHolder(arguments);
            console.error(output.toString());
        }
	};
	
	var writeWarning = function (message, element){
		var argsLenght = arguments.length;
        if (argsLenght == 1) {
            console.warn(message.toString());
        } else {
            var output = placeHolder(arguments);
            console.warn(output.toString());
        }
	};
	
	return {
		writeLine: writeLine,
		writeError: writeError,
		writeWarning: writeWarning
	}
}();