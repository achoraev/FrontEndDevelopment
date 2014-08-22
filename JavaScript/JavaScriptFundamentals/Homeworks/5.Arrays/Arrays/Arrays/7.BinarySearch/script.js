function binarySearch(number) {
    //test array
    var arrOfNumbers = [1, 5, 9, 11, 13, 15, 18, 22, 45, 55, 89];
    var low = 0,
		high = arrOfNumbers.length - 1,
		mid = parseInt((low + high) / 2);

    while (low <= high && arrOfNumbers[mid] !== number) {
        if (arrOfNumbers[mid] < number) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        mid = parseInt((low + high) / 2);
    }

    if (low > high) {
        jsConsole.writeLine("Not found!!!");
    } else {
        jsConsole.writeLine("Number " + arrOfNumbers[mid] + " is on position: " + mid);
    }
}
binarySearch(18);