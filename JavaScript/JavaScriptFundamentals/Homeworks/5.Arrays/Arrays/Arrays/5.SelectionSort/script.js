function selectionSort() {
    var arr = [3, 2, 3, 4, 2, 2, 4, 11, 8, 15];
    //test and this or try other array
    //var arr = [5, 3, 4, 7, 3, 8, 9, 55, 99, 69, 6, 8, 5, 5, 59, 9];
    var startingPosition = 0;
    var currentMinIndex = 0;
    var currentMin = 100000;
    var len = arr.length;

    while (startingPosition <= len - 1) {
        for (var i = startingPosition; i < len; i++) {
            if (arr[i] <= currentMin) {
                currentMin = arr[i];
                currentMinIndex = i;
            }
        }
        var temp = arr[startingPosition];
        arr[startingPosition] = currentMin;
        arr[currentMinIndex] = temp;
        startingPosition++;
        currentMin = 100000;
    }

    for (var j = 0; j < len; j++) {
        if (j < (len - 1)) {
            jsConsole.write(arr[j] + ", ");
        } else {
            jsConsole.write(arr[j]);
        }

    }
}
selectionSort();