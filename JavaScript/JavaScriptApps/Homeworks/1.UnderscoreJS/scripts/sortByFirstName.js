(function () {
    'use strict';
    var students = [{fname: "Todor", lname: "Ivanov", age: 17, marksAverage: 5.25},
				{fname: "Petra", lname: "Georgieva", age: 22, marksAverage: 4.46},
				{fname: "Zina", lname: "Georgieva", age: 28, marksAverage: 4.26},
				{fname: "Georgi", lname: "Petrov", age: 24, marksAverage: 5.65},
				{fname: "Georgi", lname: "Deanov", age: 21, marksAverage: 5.15},
				{fname: "Stamina", lname: "Staminova", age: 45, marksAverage: 3.98}];

    function sortStudentsFirstNameBeforeLastName(students) {
        return _.filter(students, function (student) {
            return student.fname < student.lname;
        });
    }

    function sortStudentsDescending(students) {
        var sorted = _.sortBy(students, 'fname');
        return sorted.reverse();
    }

    function PrintSortedByName() {
        var result = sortStudentsDescending(students);
        _.each(result, function (student) {
            console.log(student.fname);
        });
    }

    console.log("First Task");
    console.log(sortStudentsFirstNameBeforeLastName(students));
    console.log(sortStudentsDescending(students));
    PrintSortedByName();

}());