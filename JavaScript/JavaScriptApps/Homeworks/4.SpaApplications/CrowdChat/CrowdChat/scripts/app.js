define(function () {
    'use strict';
    require.config({
        paths: {
            jquery: 'libs/jquery-2.1.1.min',
            sammy: 'libs/sammy',
            q: 'libs/q',
            httpRequester: 'httpRequester',
            userInterface: 'userInterface',
            controller: 'controller'
        }
    });

    require(['jquery', 'sammy', 'controller'], function ($, Sammy, Controller) {
        var appController = new Controller('http://crowd-chat.herokuapp.com/posts'),
            app;
        appController.setEventHandler();

        app = Sammy('#wrapper', function () {
            this.get("#/login", function () {
                if (appController.isLoggedIn()) {
                    window.location = '#/chat';
                    return;
                }

                appController.loadLoginForm();
            });

            this.get("#/chat", function () {
                if (!appController.isLoggedIn()) {
                    window.location = '#/login';
                    return;
                }

                appController.loadChatBox();
            });
        });

        app.run('#/login');
    });
});