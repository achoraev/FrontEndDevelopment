//var params = [
//    'def func sum[5, 3,    7, 2, 6, 3]',
//    'def func2 [5, 3, 7, 2, 6, 3]',
//    'def func3 min[func2]',
//    'def func4 max[5, 3, 7, 2, 6, 3]',
//    'def func5 avg[5, 3, 7, 2, 6, 3]',
//    'def func6 sum[func2, func3, func4 ]',
//    'sum[func6, func4]'];

var params = [
    'def func sum[1, 2, 3, -6]',
    'def newList [func, 10, 1]',
    'def newFunc sum[func, 100, newList]',
    '[newFunc]'];

    //document.write(Solve(params));
console.log(Solve(params));

function Solve(params) {
    var finalResult;
    var len = params.length;
    var arrOfFunctions = {};

    for (var i = 0; i < len-1; i++) {                
        var operatorSum = params[i].indexOf('sum', 3);
        var operatorMin = params[i].indexOf('min', 3);
        var operatorMax = params[i].indexOf('max', 3);
        var operatorAverage = params[i].indexOf('avg', 3);
        var startElement = params[i].indexOf('[') + 1;
        var endElement = params[i].lastIndexOf(']');
        var elements = params[i].substring(startElement, endElement).split(',');

        if (operatorSum > -1) {
            var sumOfElements = sum(elements, arrOfFunctions);
            arrOfFunctions[i] = {
                name: checkOperators(params),
                value: sumOfElements,
                list: []
            };
        } else if (operatorMin > -1) {
            var minElement = minOfElement(elements, arrOfFunctions);
            arrOfFunctions[i] = {
                name: checkOperators(params),
                value: minElement,
                list: []
            };
        } else if (operatorMax > -1) {
            var maxElement = maxOfElement(elements, arrOfFunctions);
            arrOfFunctions[i] = {
                name: checkOperators(params),
                value: maxElement,
                list: []
            };
        } else if (operatorAverage > -1) {
            var averageElement = average(elements, arrOfFunctions);
            arrOfFunctions[i] = {
                name: checkOperators(params),
                value: averageElement,
                list: []
            };
        } else {
            arrOfFunctions[i] = {
                name: checkOperators(params),
                list: elements
            };
        }        
    }

    if (params[len-1].indexOf('[') > 0) {
        var operator = params[len].substr(0, 3);
    } else {        
        endElement = params[len-1].lastIndexOf(']');
        elements = params[len-1].substring(1, endElement).split(',');

        for (var i = 1; i < params[len-1].length - 1; i++) {
            if (parseInt(elements[i])) {
                finalResult = elements[i];
            } else {
                for (var func in arrOfFunctions) {
                    if (elements[i] === 'func') {
                        finalResult += arrOfFunctions[i].value;
                    }
                }
            }
        }        
    }
    finalResult = arrOfFunctions[len - 2].value;

    function checkOperators(operator) {
        var nameOfFunc = '';
        for (var j = 4; j <= params[i].length + 4; j++) {
            if (params[i][j] !== ' ') {
                nameOfFunc += params[i][j];
            } else {
                break;
            }
        }
        return nameOfFunc;
    }

    function average(elements, arrOfFunctions) {
        var averageNumber = sum(elements, arrOfFunctions) % elements.length;
        return averageNumber;
    }

    function sum(elements, arrOfFunctions) {
        var totalSum = 0;
        for (var i = 0; i < elements.length; i++) {
            if (parseInt(elements[i])) {
                totalSum += parseInt(elements[i]);
            } else {
                for (var func in arrOfFunctions) {
                    if (elements[i] === 'func') {
                        totalSum += arrOfFunctions[i].value;
                    }
                }
            }
        }
        return totalSum;
    }

    function minOfElement(elements, arrOfFunctions) {
        var min = elements[0];
        for (var i = 0; i < elements.length; i++) {
            if (parseInt(elements[i]) && elements[i] < min) {
                min = parseInt(elements[i]);
            } else {
                for (var func in arrOfFunctions) {
                    if (elements[i] === 'func' && arrOfFunctions[i].value < min) {
                        min = arrOfFunctions[i].value;
                    }
                }
            }
        }
        return min;
    }

    function maxOfElement(elements, arrOfFunctions) {
        var max = elements[0];
        for (var i = 0; i < elements.length; i++) {
            if (parseInt(elements[i]) && elements[i] > max) {
                max = parseInt(elements[i]);
            } else {
                for (var func in arrOfFunctions) {
                    if (elements[i] === 'func' && arrOfFunctions[i].value > max) {
                        max = arrOfFunctions[i].value;
                    }
                }
            }
        }
        return max;
    }

    return finalResult;
}