// var params = ["6 7 3", "0 0", "2 2", "-2 2", "3 -1"];
var params = ["500 500 1", "0 0", "1 1"];

function Solve(params) {
    var input = params[0].split(' ').map(Number);
    var rows = input[0];
    var cols = input[1];
    var jumps = input[2];
    var startPosition = params[1].split(' ').map(Number);
    var startPositionRow = startPosition[0];
    var startPositionCol = startPosition[1];
    var field = [];
    var counter = 1;

    // fill matrix
    for (var i = 0; i < rows; i++) {
        field[i] = [];
        for (var j = 0; j < cols; j++) {
            field[i][j] = counter;
            counter++;
        }
    }

    var jumpsCoordinates = [];

    for (var j = 0; j < jumps; j++) {
        jumpsCoordinates[j] = params[j+2].split(' ').map(Number);
    }

    var sumOfNumbers = field[startPositionRow][startPositionCol];
    var numberOfJumps = 0;
    var currentJump = 0;

    while (true) {        
        var currentPositionRow = jumpsCoordinates[currentJump][0] + startPositionRow;
        var currentPositionCol = jumpsCoordinates[currentJump][1] + startPositionCol;
        var isEscape = false;
        var isCaught = false;
        
        if (currentPositionRow >= rows ||
            currentPositionRow < 0 ||
            currentPositionCol >= cols ||
            currentPositionCol < 0) {
            isEscape = true;
            break;
        }
        
        if (field[currentPositionRow][currentPositionCol] === -1) {
            isCaught = true;
            break;
        }

        sumOfNumbers += field[currentPositionRow][currentPositionCol];
        numberOfJumps++;
        field[currentPositionRow][currentPositionCol] = -1;                
        currentJump++;

        if (currentJump >= jumps) {
            currentJump = 0;
        }
        
        startPositionRow = currentPositionRow;
        startPositionCol = currentPositionCol;
    }
    if (isEscape) {
        return "escaped " + sumOfNumbers;
    }

    if (isCaught) {
        return "caught " + numberOfJumps;
    }   
}
console.log(Solve(params));