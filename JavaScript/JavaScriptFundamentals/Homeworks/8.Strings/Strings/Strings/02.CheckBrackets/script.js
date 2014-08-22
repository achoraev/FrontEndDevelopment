function checkBrackets() {
    //var expression = "((a+b)/5-d)";//correct
    var expression = ")(a+b))";//incorrect    
    var inExpression = false;
    var correctBrackets = true;

    for (var i = 0; i < expression.length; i++) {
        if (expression[i] == "(") {
            inExpression = true;
        } else if (expression[i] == ")" && !inExpression) {
            correctBrackets = false;
        }
    }
    if (correctBrackets) {
        jsConsole.writeLine("Brackets are correct!!!");
    } else {
        jsConsole.writeLine("Incorrect brackets!!!");
    }
}

checkBrackets();