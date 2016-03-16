function TimerRoutes ($stateProvider) {
    "ngInject";
    $stateProvider
        .state('app.timer', {
            url: '/timer',
            templateUrl: 'timer/res/layout/timer-view.html',
            controller: 'TimerController',
            controllerAs: 'TimerVM',
            data: {
                notProtected: true
            }
        })
    ;
}

export { TimerRoutes };
