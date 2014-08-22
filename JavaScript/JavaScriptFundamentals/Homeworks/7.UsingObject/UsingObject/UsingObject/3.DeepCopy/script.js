function Clone(obj) {
    var result;

    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    for (var i in obj) {
        if (obj[i] && typeof obj[i] == "object") {
            result[i] = Clone(obj[i]);
        } else {
            result[i] = obj[i];
        }
    }
    return result;
}

var pesho = {
    firstName: "Petar",
    lastName: "Ivanov",
    age: 21,
    arr: [1, 2, 3],
    arrAssociate: { firstName: "Ivan", age: 30 }
};

var vanio = Clone(pesho);

vanio.c = [7, 8, 9];
vanio.d = { a: 8, x: 9 };

jsConsole.writeLine(pesho.arr.join(', '));
jsConsole.writeLine(pesho.arrAssociate.age + " " + pesho.arrAssociate.firstName);
jsConsole.writeLine(vanio.firstName);
jsConsole.writeLine(vanio.arr);
jsConsole.writeLine(vanio.c);

for (var i in pesho) {
    jsConsole.writeLine(i);
}