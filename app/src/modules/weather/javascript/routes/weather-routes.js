function WeatherRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.weather', {
            url: '/weather',
            templateUrl: 'weather/res/layout/weather-view.html',
            controller: 'WeatherController',
            controllerAs: 'WeatherVM',
            data: {
                notProtected: true
            }
        });
}

export { WeatherRoutes };
