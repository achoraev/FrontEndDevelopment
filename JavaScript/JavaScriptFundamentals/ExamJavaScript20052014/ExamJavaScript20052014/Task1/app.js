console.log(Solve([
    '110',
    '13',
    '15',
    '17']));

console.log(Solve([
    '20',
    '11',
    '200',
    '300']));

console.log(Solve([
    '110',
    '19',
    '29',
    '39']));

function Solve(params) {
    var sum = parseInt(params[0]);
    var elements = params.map(Number);
    var middleSum = 0;
    var answer = 0;

    for (var i = 1; i <= 3; i++) {
        middleSum += elements[i];
        answer = MaxSum(middleSum);
        for (var j = 1; j <= 3; j++) {
            middleSum += elements[j];
            answer = MaxSum(middleSum);
            for (var k = 1; k <= 3; k++) {
                middleSum += elements[k];
                answer = MaxSum(middleSum);
                if (middleSum >= sum) {
                    middleSum = 0;
                }
            }
        }
    }    

    return answer;

    function MaxSum(middleSum) {
        if (middleSum >= sum) {            
            return answer;
        } else {
            if (middleSum > answer) {
                answer = middleSum;
            }
        }
        return answer;
    }
}