//var params = ["3 4", "1 3", "lrrd", "dlll", "rddd"];
 var params = ["5 8", "0 0", "rrrrrrrd", "rludulrd", "durlddud", "urrrldud", "ulllllll"];

function Solve(params) {
    var mAndN = params[0].split(" ").map(Number);
    var rAndC = params[1].split(" ").map(Number);
    var currentPositionRow = rAndC[0];
    var currentPositionCol = rAndC[1];
    var result = 0;
    var rows = mAndN[0];
    var cols = mAndN[1];
    var counter = 1;
    var field = [];
    var directions = [];
    // fill matrix
    for (var i = 0; i < rows; i++) {
        field[i] = [];
        for (var j = 0; j < cols; j++) {
            field[i][j] = counter;
            counter++;
        }
    }
    // fill directions
    for (var k = 0; k < rows; k++) {
        directions[k] = [];
        for (var m = 0; m < cols; m++) {
            directions[k][m] = params[k+2][m];
        }
    }
    var sumOfNumbers = 0;
    var numberOfCells = 0;    

    while (true) {
        if (currentPositionRow >= rows
            || currentPositionCol >= cols
            || currentPositionRow < 0
            || currentPositionCol < 0) {
            return "out " + sumOfNumbers;
            break;
        }

        if (field[currentPositionRow][currentPositionCol] === -100) {
            return "lost " + numberOfCells;
            break;
        }

        if (directions[currentPositionRow][currentPositionCol] === 'l') {
            sumOfNumbers += field[currentPositionRow][currentPositionCol];
            field[currentPositionRow][currentPositionCol] = -100;
            currentPositionCol--;
            numberOfCells++;                        
        } else if (directions[currentPositionRow][currentPositionCol] === 'r') {
            sumOfNumbers += field[currentPositionRow][currentPositionCol];
            field[currentPositionRow][currentPositionCol] = -100;
            currentPositionCol++;
            numberOfCells++;            
        } else if (directions[currentPositionRow][currentPositionCol] === 'u') {
            sumOfNumbers += field[currentPositionRow][currentPositionCol];
            field[currentPositionRow][currentPositionCol] = -100;
            currentPositionRow--;
            numberOfCells++;            
        } else if (directions[currentPositionRow][currentPositionCol] === 'd') {
            sumOfNumbers += field[currentPositionRow][currentPositionCol];
            field[currentPositionRow][currentPositionCol] = -100;
            currentPositionRow++;
            numberOfCells++;            
        }
    }
}
console.log(Solve(params));