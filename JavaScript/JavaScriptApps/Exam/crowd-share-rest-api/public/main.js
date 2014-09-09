(function () {
    require.config({        
        paths: {            
            "jquery": "libs/jquery",
            "handlebars": "libs/handlebars",
            "Q": "libs/q",
            "underscore": "libs/underscore",
            "sha": "libs/sha",

            // Modules
            "router": "modules/router",
            "requester": "modules/requester",
            "storager": "modules/storager",
            "viewLoader": "modules/viewLoader",
            "templater": "modules/templater",

            // App
            "modules": "scripts/moduleLoader",
            "appConfig": "scripts/appConfig",
        }
    });

    require(["router", "templater"], function (router) {
        router.run();
    });
}());