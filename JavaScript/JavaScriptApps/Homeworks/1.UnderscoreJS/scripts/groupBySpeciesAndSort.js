(function () {
    'use strict';
    var animals = [{animal: "donkey", species: "mamal", legN: 4},
                    {animal: "horse", species: "mamal", legN: 4},
                    {animal: "spider", species: "insect", legN: 8},
                    {animal: "centipede", species: "insect", legN: 100},
                    {animal: "fly", species: "insect", legN: 6}];

    function printAllAnimals(animals) {
        return _.each(animals, function (animal) {
            return console.log("Animal: " + animal.animal + " Species: " + animal.species + " Number of legs: " + animal.legN);
        });
    }

    function groupBySpeciesAndSort(animals) {
        var groupedBySpecies = _.sortBy(animals, function (animal) {
            return animal.legN;
        });
        var result = _.groupBy(groupedBySpecies, function (animal) {
            return animal.species;
        });
        return result;
    }

    console.log("Fourth Task");
    printAllAnimals(animals);
    console.log(groupBySpeciesAndSort(animals));

}());