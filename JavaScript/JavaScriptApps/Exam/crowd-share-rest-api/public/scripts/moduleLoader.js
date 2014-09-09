define(["requester", "storager", "viewLoader", "appConfig", "sha"], function (requester, storager, viewLoader, appConfig, shaEncrypt) {

    return {
        request: requester,
        storage: storager,
        view: viewLoader,
        config: appConfig,
        encrypt: shaEncrypt,
        redirect: function (newLocation) {
            window.location.hash = newLocation;
        },
    }
});