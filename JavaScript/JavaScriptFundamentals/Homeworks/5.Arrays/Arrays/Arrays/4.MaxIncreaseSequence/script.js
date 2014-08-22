function maxIncreaseSeq() {
    var arr = [3, 2, 3, 4, 2, 2, 4];
    //test and this
    //var arr = [5, 3, 4, 1, 2, 3, 4, 5, 8];
    var maxSequence = 0;
    var currentSequence = 1;
    var startPosition = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] - 1) {
            currentSequence++;
        } else {
            if (currentSequence > maxSequence) {
                maxSequence = currentSequence;
                startPosition = i - (maxSequence - 1);
            }
            currentSequence = 1;
        }
    }

    for (var j = 0; j < maxSequence; j++) {
        if (j < (maxSequence - 1)) {
            jsConsole.write(arr[startPosition + j] + ", ");
        } else {
            jsConsole.write(arr[startPosition + j]);
        }
    }
}
maxIncreaseSeq();