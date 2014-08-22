function maxSeq() {
    var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
    //test and this
    //var arr = [2,2,2,2];
    var maxSequence = 0;
    var currentSequence = 1;
    var sequenceNumber = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            currentSequence++;
        } else {
            if (currentSequence > maxSequence) {
                maxSequence = currentSequence;
                sequenceNumber = arr[i];
            }
            currentSequence = 1;
        }
    }

    for (var j = 0; j < maxSequence; j++) {
        if (j < maxSequence-1) {
            jsConsole.write(sequenceNumber + ", ");
        } else {
            jsConsole.write(sequenceNumber);
        }
    }
}
maxSeq();