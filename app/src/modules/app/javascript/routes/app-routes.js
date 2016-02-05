function AppRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'app/res/layout/app-view.html',
            controller: 'AppController',
            controllerAs: 'AppVM'
        });
}

export { AppRoutes };
