define(["jquery", "Q"], function ($, Q) {
    function makeRequest(url, type, data) {
        var deferred = Q.defer();

        $.ajax({
            url: url,
            type: type,
            contentType: "application/json",
            data: data,
            success: function resolveDeferred(requestData) {
                deferred.resolve(requestData);
            },
            error: function rejectDeferred(errorData) {
                deferred.reject(JSON.parse(errorData.responseText));
            }
        });

        return deferred.promise;
    }

    function makeGetRequest(url) {
        return makeRequest(url, "GET");
    }

    function makePostRequest(url, data) {
        return makeRequest(url, "POST", data);
    }

    return {
        get: makeGetRequest,
        post: makePostRequest
    }
});