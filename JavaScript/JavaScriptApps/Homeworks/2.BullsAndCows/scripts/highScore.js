define(["main"], function (main) {
	'use strict';

	function saveState(input, guesses) {
		input.addEventListener("change", function () {
			if (!localStorage.getItem(input.value)) {
				JSON.stringify(localStorage.setItem(input.value, guesses));
			}
			printHighScore();
		});
	}

	function printHighScore() {
		var highScoreList = document.createElement('ul'),
			key;
		highScoreList.setAttribute("id", "highScoreList");
		for (key in localStorage) {
			highScoreList.innerHTML += "<li><span class='username'>Player: " + key +
				"</span> - <span class='score'>Guesses:" + localStorage.getItem(key) + "</span></li>";
		}
		wrapper.appendChild(highScoreList);
	}

	function deleteLocalStorage() {
		var buttonDelete = document.getElementById("delete");
		buttonDelete.addEventListener("click", function () {
			localStorage.clear();
			alert("Local Storage is Clear!!!");
		});
	}

	function showScore(bulls, cows, listOfGuesses) {
		var wrapper = document.getElementById("wrapper"),
			list = document.getElementById("list-items"),
			newListItem = document.createElement('li');
		newListItem.innerHTML = listOfGuesses.innerHTML + '    Bulls: ' + bulls + ', Cows: ' + cows;
		list.appendChild(newListItem);
		wrapper.appendChild(list);
	}

	return {
		saveState: saveState,
		deleteLocalStorage: deleteLocalStorage,
		showScore: showScore
	}
});