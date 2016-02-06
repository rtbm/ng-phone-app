function AccountRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.account_signin', {
            url: '/account/signin',
            templateUrl: 'account/res/layout/account.signin-view.html',
            controller: 'AccountSigninController',
            controllerAs: 'AccountSigninVM'
        })
        .state('app.account_signup', {
            url: '/account/signup',
            templateUrl: 'account/res/layout/account.signup-view.html',
            controller: 'AccountSignupController',
            controllerAs: 'AccountSignupVM'
        })
    ;
}

export { AccountRoutes };
