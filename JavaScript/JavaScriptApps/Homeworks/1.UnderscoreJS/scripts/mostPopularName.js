(function () {
    'use strict';
    var peoples = [{fname: "Todor", lname: "Ivanov", age: 17},
                    {fname: "Petra", lname: "Georgieva", age: 22},
                    {fname: "Zina", lname: "Georgieva", age: 28},
                    {fname: "Georgi", lname: "Petrov", age: 24},
                    {fname: "Georgi", lname: "Deanov", age: 21},
                    {fname: "Stamina", lname: "Staminova", age: 45}];

    function findMostCommonName(object, prop) {
        var grouped = _.countBy(object, prop),
            maxCount = _.max(grouped),
            result = _.invert(grouped);

        console.log("Most common " + prop + " " + result[maxCount]);
    }

    console.log("Seventh Task");
    findMostCommonName(peoples, 'fname');
    findMostCommonName(peoples, 'lname');

}());