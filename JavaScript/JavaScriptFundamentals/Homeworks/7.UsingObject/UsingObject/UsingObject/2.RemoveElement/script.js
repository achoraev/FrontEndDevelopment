var numbers = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];

Array.prototype.remove = function (numberToRemove) {
    for (var i = 0; i < numbers.length; i++) {
        if (parseInt(numbers[i]) == numberToRemove) {
            numbers.splice(i, 1);
            i--;
        }
    }
};

numbers.remove(1);
jsConsole.writeLine(numbers);