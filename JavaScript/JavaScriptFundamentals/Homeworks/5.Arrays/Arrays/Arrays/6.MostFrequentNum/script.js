function mostFreqNumber() {
    //example from presentation
    var nums = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
    //check and this with your numbers
    //var nums = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 1, 9, 3, 9];
    var count = 1;
    var maxCount = 0;
    var foundMostFreqNum = 0;

    for (var i = 0; i <= nums.length; i++) {
        for (var j = (i + 1) ; j <= nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count > maxCount && nums[i] !== foundMostFreqNum) {
            maxCount = count;
            foundMostFreqNum = nums[i];

        }
        count = 1;
    }

    jsConsole.writeLine("Number: " + foundMostFreqNum + " (" + maxCount + " times)");
}
mostFreqNumber();