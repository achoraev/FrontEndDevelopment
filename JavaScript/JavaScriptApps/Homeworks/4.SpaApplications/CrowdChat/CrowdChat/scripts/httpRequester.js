define(['jquery', 'q'], function ($, Q) {
    'use strict';
    var HttpRequester,
        makeHttpRequest,
        deferred,
        getJSON,
        postJSON;

    HttpRequester = (function () {
        makeHttpRequest = function (url, type, data) {
            deferred = Q.defer();

            $.ajax({
                url: url,
                type: type,
                data: data ? JSON.stringify(data) : "",
                contentType: "application/json",
                timeout: 5000,
                success: function (resultData) {
                    deferred.resolve(resultData);
                },
                error: function (errorData) {
                    deferred.reject(errorData);
                }
            });

            return deferred.promise;
        };

        getJSON = function (url) {
            return makeHttpRequest(url, "GET");
        };

        postJSON = function (url, data) {
            return makeHttpRequest(url, "POST", data);
        };

        return {
            getJSON: getJSON,
            postJSON: postJSON
        };
    }());

    return HttpRequester;
});