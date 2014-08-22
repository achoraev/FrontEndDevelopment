var Pesho = {
    name: "Petar",
    age: 25
};

function CheckProperty(obj, property) {
    var haveProp = false;
    for (var prop in obj) {
        if (prop === property) {
            haveProp = true;
            break;
        } else {
            haveProp = false;
        }
    }
    if (haveProp) {
        return true;
    } else {
        return false;
    }
}

// if (CheckProperty(Pesho, "name")) {
// if (CheckProperty(Pesho, "length")){
if (CheckProperty(Pesho, "age")) {
    jsConsole.writeLine("Property exist!!!");
} else {
    jsConsole.writeLine("NOT exist!!!");
}

// easy decision
jsConsole.writeLine(Pesho.hasOwnProperty("age"));