define(["highScore"], function (highScore) {
	'use strict';

	var wrapper = document.getElementById("wrapper"),	
		list = document.createElement('ul'),		
		listOfGuesses = document.createElement('li'),
		len = 4,
		num = randomNumber(len),
		nGuesses = 0,
		count = 1,
		bullAndCows,
		guess;

	list.setAttribute("id", "list-items");
	wrapper.appendChild(list);
	console.log(num);
	highScore.deleteLocalStorage();

	function playBullsAndCows(len, num) {
		nGuesses += 1;
		guess = getGuess(nGuesses, len);
		bullAndCows = countGuesses(num, guess);
		document.getElementById("guessInput").value = "";
		highScore.showScore(bullAndCows.bulls, bullAndCows.cows, listOfGuesses);
		if (bullAndCows.bulls === len) {
			showFinalResult(nGuesses);
		}
	}

	function getGuess(nGuesses, len) {
		var input = document.getElementById('guessInput');
			guess = input.value;
		listOfGuesses.innerHTML = 'Your guess ' + guess + ' is #' + nGuesses + ': ';		
		guess = String(parseInt(guess)).split('');
		if (guess.length !== len) {
			alert('  You must enter a ' + len + ' digit number.');
			return;
		}
		if (haveDuplicates(guess)) {
			alert('  No digits can be duplicated.');
			return;
		}
		return guess;
	}

	function countGuesses(num, guess) {
		var count = {
				bulls: 0,
				cows: 0
			},
			digPresent,
			g,
			i;
		g = guess.join('');
		for (i = 0; i < num.length; i += 1) {
			digPresent = g.search(num[i]) !== -1;
			if (num[i] == guess[i]) {
				count.bulls += 1;
			} else if (digPresent) {
				count.cows += 1;
			}
		}
		return count;
	}

	function showFinalResult(guesses) {
		listOfGuesses.innerHTML = 'You win!!! Guesses needed: ' + guesses;
		var newLi = document.createElement('li'),
			label = document.createElement('label'),
			input;
		label.innerHTML = 'Enter your username: ';
		input = document.createElement('input');
		input.setAttribute("type", "text");
		input.setAttribute("id", "nick-input");
		newLi.appendChild(label);
		newLi.appendChild(input);
		list.appendChild(newLi);
		wrapper.appendChild(list);

		highScore.saveState(input, guesses);
	}

	function onChangeEvent() {
		var selected = document.getElementById("guessInput");
		selected.addEventListener("change", function () {
			playBullsAndCows(len, num);
		});
	}

	function haveDuplicates(array) {
		var temp = array.concat().sort(),
			i;
		for (i = 1; i < temp.length; i += 1) {
			if (temp[i] === temp[i - 1]) {
				return true;
			}
		}
		return false;
	}

	function randomNumber(len) {
		var secretNumber = [],
			currentSecretNumber,
			i;

		for (i = 0; i < len; i += 1) {
			if (i === 0) {
				secretNumber.push(getRandomInt(1, 9));
			} else {
				currentSecretNumber = getRandomInt(0, 9);

				while (secretNumber.indexOf(currentSecretNumber) > -1) {
					currentSecretNumber = getRandomInt(0, 9);
				}

				secretNumber.push(currentSecretNumber);
			}
		}

		return secretNumber;
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return {
		randomNumber: randomNumber,
		onChangeEvent: onChangeEvent,		
	}
});