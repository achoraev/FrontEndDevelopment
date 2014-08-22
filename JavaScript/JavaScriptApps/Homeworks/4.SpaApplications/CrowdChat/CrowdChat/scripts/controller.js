define(['httpRequester', 'userInterface'], function (HttpRequester, UserInterface) {
    'use strict';
    var Controller = (function () {
        Controller = function (resourceUrl) {
            this.resourseUrl = resourceUrl;
            this.refreshTimeMS = 4000;
            this.showLastMessagesCount = 200;
        };

        Controller.prototype.getUsername = function () {
            return sessionStorage.getItem('username');
        };

        Controller.prototype.setUsername = function (username) {
            sessionStorage.setItem('username', username);
        };

        Controller.prototype.destroyUsername = function () {
            sessionStorage.clear();
        };

        Controller.prototype.isLoggedIn = function () {
            return this.getUsername() !== null;
        };

        Controller.prototype.loadChatBox = function () {
            var _this = this;

            $.when(
                $.get('views/chatTemplate.html', function (data) {
                    $('#wrapper').html(data);
                    $('.username-box').html(_this.getUsername());
                    _this.updateChatBox();
                    setInterval(function () {
                        _this.updateChatBox();
                    }, _this.refreshTimeMS);
                })
            );
        };

        Controller.prototype.updateChatBox = function () {
            var _this = this;
            HttpRequester.getJSON(this.resourseUrl)
                .then(function (data) {
                    var chatBoxHtml = UserInterface.buildChatBox(data, _this.showLastMessagesCount);
                    $('#chatbox').html(chatBoxHtml);
                });
        };

        Controller.prototype.loadLoginForm = function () {
            $('#wrapper').load('views/loginTemplate.html');
        };

        Controller.prototype.setEventHandler = function () {
            var _this = this,
                $wrapper = $('#wrapper');

            $wrapper.on('change', '#login-name', function () {
                var $loginInput = $('#login-name'),
                    username = $loginInput.val();
                _this.setUsername(username);
                window.location = '#/chat';
            });

            $wrapper.on('click', '#exit-btn', function () {
                var exit = confirm("Are you sure you want to end the session?");
                if (exit === true) {
                    _this.destroyUsername();
                    window.location = '#/login';
                }
            });

            $wrapper.on('change', '#usermsg', function () {
                var $messageInput = $('#usermsg'),
                    enteredMessage = $messageInput.val().trim(),
                    postBy = _this.getUsername();

                if (enteredMessage) {
                    HttpRequester.postJSON(_this.resourseUrl, {
                        user: postBy,
                        text: enteredMessage
                    })
                        .then(function () {
                            $messageInput.val('');
                            var postHtml = UserInterface.buildMessage(postBy, enteredMessage);
                            $('#chatbox').prepend(postHtml);
                        });
                }
            });
        };

        return Controller;
    }());

    return Controller;
});