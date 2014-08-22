function mostFreqNumber() {
    var number = jsConsole.readInteger("#numberN");
    var nums = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3, 8, 7, 0, 11, 5, 5, 6];
    //check and this with your numbers
    //var nums = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 1, 9, 3, 9];
    var count = 0;

    for (var i = 0; i <= nums.length; i++) {
        if (number === nums[i]) {
            count++;
        }
    }

    jsConsole.writeLine("Number: " + number + " (" + count + " times)");
}