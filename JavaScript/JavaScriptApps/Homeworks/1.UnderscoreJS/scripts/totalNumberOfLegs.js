(function () {
    'use strict';
    var animals = [{animal: "donkey", species: "mamal", legN: 4},
				{animal: "horse", species: "mamal", legN: 4},
				{animal: "spider", species: "insect", legN: 8},
				{animal: "centipede", species: "insect", legN: 100},
				{animal: "fly", species: "insect", legN: 6}];

    function sumOfLegs(animals) {
	   var sum = _.reduce(animals, function (memo, num) {
		      return memo + num.legN;
	   }, 0);
	   return sum;
    }

    console.log("Fifth Task");
    console.log("Sum of legs is: " + sumOfLegs(animals));

}());