define(["jquery", "modules"], function ($, modules) {
    var url = modules.config.apiURL + "/user";

	function addEventLogOut(){
		$('#exit-btn').on('click', run);
	})
	
    function run() {
        var sessionKey = modules.storage.get("loggedUser").sessionKey;

        modules.request.post(url, sessionKey)
        .then(function () {
            modules.storage.clear();
            modules.redirect("login");
        });
    }

    return {
        run: run,
		addEvent: addEventLogOut
    }
});