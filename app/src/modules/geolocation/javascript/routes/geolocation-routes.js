function GeolocationRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.geolocation_demo', {
            url: '/geolocation',
            templateUrl: 'geolocation/res/layout/geolocation.demo-view.html',
            controller: 'GeolocationDemoController',
            controllerAs: 'GeolocationDemoVM',
            data: {
                notProtected: true
            }
        });
}

export { GeolocationRoutes };
