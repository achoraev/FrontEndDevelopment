(function () {
	'use strict';
	var canvasElement = document.getElementById("snake-canvas"),		
		startButton = document.getElementById("start-game-btn"),
		stopButton = document.getElementById("stop-game-btn"),		
		canvasRenderer = renderers.getCanvas(canvasElement),		
		game = games.get(canvasRenderer);
	stopButton.disabled = true;

	document.addEventListener("keydown", function (ev) {
		var keyCode = ev.keyCode;
		if (keyCode === 20 || keyCode === 32) {
			if (game.getState() === "running") {
				performGameStop();
			} else {
				performGameStart();
			}
		}
	});

	function performGameStart() {
		game.start();
		startButton.disabled = true;
		stopButton.disabled = false;		
	}

	function performGameStop() {
		game.stop();
		startButton.disabled = false;
		stopButton.disabled = true;		
	}

	startButton.addEventListener("click", function (ev) {
		performGameStart();
	});

	stopButton.addEventListener("click", function () {
		performGameStop();
	});
}());