define(["jquery", "modules"], function ($, modules) {
    var userInformation = {},
//        url = modules.config.apiURL + "user/register";
		url = modules.config.apiURL + "/user";

    function run() {
        modules.view.load("register")
        .then(function (data) {
            addEvents();
        });
    }

    function addEvents() {
        $("form").on("submit", function (event) {
            event.preventDefault();
            var self = $(this),
				error;

            $.each(self.serializeArray(), function (i, input) {
				if(isValidUserName(input.value.length)){
                userInformation[input.name] = input.value;
				} else {
					error = "Username must be from 6 to 40 symbols";
				}
            });

            registerUser();
        });
    }
	
	function isValidUserName (username) {
		if (username > 6 && username < 40)
		{
			return true;
		} else {
			return false;
		}
	}

    function registerUser() {
        encryptPassword();

        modules.request.post(url, JSON.stringify(userInformation))
        .then(function (resultData) {
            modules.storage.set("loggedUser", resultData);
			alert("You succesfully registered!!!");
            modules.redirect("#login");
        }, function (error) {
            alert(error);		
        });
    }

    function encryptPassword() {
        userInformation.authCode = modules.encrypt.SHA1(userInformation.username + userInformation.authCode).toString();
    }

    return {
        run: run
    }
});