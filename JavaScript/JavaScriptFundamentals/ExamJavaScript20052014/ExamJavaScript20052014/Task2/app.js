console.log(Solve([
  '3 5',
  '54561',
  '43328',
  '52388',
]));

console.log(Solve([
  '3 5',
  '54361',
  '43326',
  '52888',
]));

function Solve(args) {    
    var totalSum = 0;
    var totalJumps = -1;
    var rowsAndCols = args[0].split(' ').map(Number);
    var rowIndex = rowsAndCols[0]-1;
    var colIndex = rowsAndCols[1]-1;
    var field = [];
    var secondField = [];
    var endRow;
    var horseOutOfField = false;
    var horseOnVisited = false;

    args.splice(0, 1);

    // fill field matrix 
    for (var i = 0; i <= rowIndex; i++) {
        field[i] = [];
        for (var j = 0; j <= colIndex; j++) {
            field[i][j] = parseInt(args[i][j]);
        }
    }

    // fill second matrix    
    for (var k = 0; k <= rowIndex; k++) {
        var startRow = Math.pow(2, k);
        secondField[k] = [];
        for (var m = 0; m <= colIndex; m++) {
            secondField[k][m] = startRow;
            startRow--;
        }
    }

    var currentCell = field[rowIndex][colIndex];
    totalSum = 0;
    var currentRow = rowIndex;
    var currentCol = colIndex;

    // moves
    while (true) {       
        if (isInField(currentRow, currentCol) && !horseOnVisited) {
            totalJumps++;
            if (secondField[currentRow][currentCol] !== -10000) {
                totalSum += secondField[currentRow][currentCol];
            } else {
                horseOnVisited = true;                        
            }
            secondField[currentRow][currentCol] = -10000;
        } else {
            horseOutOfField = true;                    
        }
       
        if (horseOnVisited || horseOutOfField) {
            break;
        }

        var directions = getDirections(currentCell, currentRow, currentCol);
        currentRow = directions[0];
        currentCol = directions[1];
        if (isInField(currentRow, currentCol)) {
            currentCell = field[currentRow][currentCol];
        } else {
            horseOutOfField = true;
            break;
        }        
    }
    
    if (horseOutOfField) {
        var answerSum = "Go go Horsy! Collected " + totalSum + " weeds";
        return answerSum;
        
    } else if (horseOnVisited){
        var answerJumps = "Sadly the horse is doomed in " + totalJumps + " jumps";
        return answerJumps;
    }

    function isInField(currentRow, currentCol) {
        if (currentRow > rowIndex || currentRow < 0 ||
            currentCol > colIndex || currentCol < 0) {
            return false;
        } else {
            return true;
        }
    }    

    function getDirections(currentCell,
         currentRow, currentCol) {
        switch (currentCell) {
            case 1:
                currentRow -= 2;
                currentCol++;
                break;
            case 2:
                currentRow--;
                currentCol += 2;
                break;
            case 3:
                currentRow++;
                currentCol += 2;
                break;
            case 4:
                currentRow += 2;
                currentCol++;
                break;
            case 5:
                currentRow += 2;
                currentCol--;
                break;
            case 6:
                currentRow++;
                currentCol -= 2;
                break;
            case 7:
                currentRow--;
                currentCol -= 2;
                break;
            case 8:
                currentRow -= 2;
                currentCol--;
                break;
        }
        var directions = [currentRow, currentCol];
        return directions;
    }
}