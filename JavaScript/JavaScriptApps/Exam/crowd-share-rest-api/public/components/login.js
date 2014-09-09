define(["jquery", "modules"], function ($, modules) {
    var userInformation = {},
         url = modules.config.apiURL + "/auth";

    function run() {
        modules.view.load("login")
        .then(function (data) {
            addEvents();
        });
    }

    function addEvents() {
        $("form").on("submit", function (event) {
            event.preventDefault();

            var self = $(this);

            $.each(self.serializeArray(), function (i, input) {
                userInformation[input.name] = input.value;
            });

            loginUser();
        });
    }

    function loginUser() {
        encryptPassword();

        modules.request.post(url, JSON.stringify(userInformation))
        .then(function (resultData) {
            modules.storage.set("loggedUser", resultData);
			alert("log in")
            modules.redirect("#post");
        }, function (error) {
            alert(error.message);
        });
    }

    function encryptPassword() {
        userInformation.authCode = modules.encrypt.SHA1(userInformation.username + userInformation.authCode).toString();
    }

    return {
       run: run
    }
});