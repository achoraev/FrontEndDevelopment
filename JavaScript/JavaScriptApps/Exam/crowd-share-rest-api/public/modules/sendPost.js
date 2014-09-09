define(["jquery", "appConfig", "modules"], function ($, appConfig, modules) {
		var url = modules.config.apiURL + "/post";

		function addEvents() {
			$("submitmsg").on("click", function (event) {
				event.preventDefault();

				var self = $(this);

			});
		}

		function sendPost() {
			addEvents();
			var titleInput = $('#title').val();
			var bodyInput = $('#body').val();

			$.ajax({
				type: 'POST',
				url: url,
				title: titleInput.toString(),
				body: bodyInput.toString(),
				headers: {
					"X-SessionKey": header.toString();
				}
			})

			return {
				send: sendPost
			};
		});