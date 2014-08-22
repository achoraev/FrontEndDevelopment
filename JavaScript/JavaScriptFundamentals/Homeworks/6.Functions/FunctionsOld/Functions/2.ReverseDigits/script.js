function revDigit() {
    var number = jsConsole.readInteger("#numberN");
    var reversedNumber = [];

    while (number > 0) {
        var temp = parseInt(number % 10);
        reversedNumber.push(temp);
        number = parseInt(number / 10);
    }

    for (var j = 0; j < reversedNumber.length; j++) {
        jsConsole.write(reversedNumber[j]);
    }
}