var persons = [
	{ firstName: "Pesho", lastName: "Petrov", age: 32 },
	{ firstName: "Bay", lastName: "Ivan", age: 81 },
	{ firstName: "Gosho", lastName: "Goshov", age: 18 },
	{ firstName: "Bay", lastName: "Miro", age: 13 }
];

function HasKey(obj, key) {
    for (var prop in obj) {
        if (prop === key) {
            return true;
        }
    }
    return false;
}

function GroupBy(arr, prop) {
    var result = {};
    var key;

    result.print = function () {
        for (var obj in result) {

            if (obj === "print") { continue; }

            jsConsole.writeLine("Key: " + obj);
            jsConsole.writeLine("Persons:");

            for (var person in result[obj]) {
                var currPerson = result[obj][person];
                jsConsole.writeLine("FirstName: " + currPerson.firstName + "; LastName: " + currPerson.lastName + "; Age: " + currPerson.age);
            }
        }
    };

    switch (prop) {
        case "firstName":
        case "lastName":
        case "age":
            for (var person in persons) {
                key = arr[person][prop];
                if (HasKey(result, arr[person][prop])) {
                    result[key].push(arr[person]);
                } else {
                    result[key] = [];
                    result[key].push(arr[person]);
                }
            }
            break;
        default: jsConsole.writeLine("Error! You must not enter here!");
    }

    return result;
}

// Test Grouping
var people = GroupBy(persons, "firstName");
jsConsole.writeLine("Group by First Name:");
people.print();
jsConsole.writeLine("");

people = GroupBy(persons, "lastName");
jsConsole.writeLine("Group by Last Name:");
people.print();
jsConsole.writeLine("");

people = GroupBy(persons, "age");
jsConsole.writeLine("Group by Age:");
people.print();