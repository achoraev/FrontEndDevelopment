(function () {
    'use strict';
    var students = [{fname: "Todor", lname: "Ivanov", age: 17, marksAverage: 5.25},
                    {fname: "Petra", lname: "Georgieva", age: 22, marksAverage: 4.46},
                    {fname: "Zina", lname: "Georgieva", age: 28, marksAverage: 4.26},
                    {fname: "Georgi", lname: "Petrov", age: 24, marksAverage: 5.65},
                    {fname: "Georgi", lname: "Deanov", age: 21, marksAverage: 5.15},
                    {fname: "Stamina", lname: "Staminova", age: 45, marksAverage: 3.98}];

    function findMaxMarks(students) {
        var maxMark = _.max(students, function (student) {
            return student.marksAverage;
        });
        return maxMark;
    }

    console.log("Third Task");
    console.log(findMaxMarks(students));

}());