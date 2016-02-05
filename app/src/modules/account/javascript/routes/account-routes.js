function AccountRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.account_signin', {
            url: '/account/signin',
            templateUrl: 'account/res/layout/account.signin-view.html',
            controller: 'AccountSigninController',
            controllerAs: 'AccountSigninVM'
        });
}

export { AccountRoutes };
