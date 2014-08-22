function main() {
    createUnorderedList();
}

main();

function createUnorderedList() {
    var people = [{ name: "Gosho", age: 3 },
                 { name: "Penio", age: 29 },
                 { name: "bat Asen", age: 30 }];
    var temp = document.getElementById("list-item").innerHTML;
    var finalArr = generateList(temp, people);
    for (var i = 0; i < finalArr.length; i += 2) {
        jsConsole.writeLine("<ul><li><strong>" + finalArr[i] + "</strong>&nbsp<span>" + finalArr[i + 1] + "</span></li></ul>");
    }

    function generateList(temp, people) {
        var holder = temp;
        var liArr = [];
        for (var person in people) {
            var indexName = temp.indexOf("{name}");
            var indexAge = temp.indexOf("{age}");
            temp = temp.replace("{name}", people[person].name);
            liArr.push(temp.substr(indexName, people[person].name.length));
            temp = holder;
            temp = temp.replace("{age}", people[person].age);
            liArr.push(temp.substr(indexAge, people[person].age.toString().length));
            temp = holder;
        }
        return liArr;
    }
}