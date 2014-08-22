var persons = [
	{ firstName: "Pesho", lastName: "Petrov", age: 32 },
	{ firstName: "Bay", lastName: "Ivan", age: 81 },
	{ firstName: "Gosho", lastName: "Goshov", age: 18 },
	{ firstName: "Bay", lastName: "Miro", age: 13 }
];

function findYoungestPerson(persons) {

    var minAge = Number.MAX_VALUE;
    var youngPerson;
    for (var i = 0; i < persons.length; i++) {
        for (var prop in persons[i]) {
            if (prop === "age") {
                if (persons[i].age < minAge) {
                    minAge = persons[i].age;
                    youngPerson = persons[i];
                }
            }
        }
    }
    return youngPerson;
}

var youngest = findYoungestPerson(persons);
jsConsole.writeLine("Yongest person is: " + youngest.firstName + " " + youngest.lastName + " " + youngest.age);