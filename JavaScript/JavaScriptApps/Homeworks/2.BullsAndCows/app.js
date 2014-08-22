(function () {
	'use strict';

	require.config({
		paths: {
			"highScore": "scripts/highScore",
			"main": "scripts/main",
			"jQuery": "lib/jquery-2.1.1.min"
		}
	});

	require(["main", "highScore"], function (main, highScore) {
		main.onChangeEvent();
	});
}());