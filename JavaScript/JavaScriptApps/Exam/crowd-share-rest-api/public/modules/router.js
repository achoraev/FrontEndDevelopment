define(["appConfig"], function (appConfig) {
    var currentHash = '';

    function startRouting() {
        window.location.hash = window.location.hash || appConfig.defaultRoute;
        setInterval(hashCheck, 100);
    }

    function hashCheck() {
        if (window.location.hash != currentHash) {
            loadFile(window.location.hash.substr(1));
            currentHash = window.location.hash;
        }
    }

    function loadFile(fileName) {
        require([appConfig.controllersPath + fileName], function (file) {
            file.run();
        });
    }

    return {
        run: startRouting
    };
});