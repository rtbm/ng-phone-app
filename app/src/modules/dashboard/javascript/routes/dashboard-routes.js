function DashboardRoutes ($stateProvider) {
    "ngInject";
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/res/layout/dashboard-view.html',
            controller: 'DashboardController',
            controllerAs: 'DashboardVM'
        })
    ;
}

export { DashboardRoutes };
