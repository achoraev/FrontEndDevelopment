var params = ["8", "1", "6", "-9", "4", "4", "-2", "10", "-1"];
//var params = ["1", "100"];

function Solve(params) {
    var N = parseInt(params[0]);
    var answer = -20000000,
        sum = 0;
    for (var i = 1; i <= N; i++) {
        if (parseInt(params[i]) > answer) {
            answer = params[i];
        }
        sum += parseInt(params[i]);
        for (var j = i + 1; j <= N; j++) {            
            sum += parseInt(params[j]);
            if (sum > answer) {
                answer = sum;
            } 
        }
        sum = 0;
    }

    return answer;
}
document.write(Solve(params));