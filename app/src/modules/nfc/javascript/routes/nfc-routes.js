function NfcRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.nfc_demo', {
            url: '/nfc',
            templateUrl: 'nfc/res/layout/nfc.demo-view.html',
            controller: 'NfcDemoController',
            controllerAs: 'NfcDemoVM',
            data: {
                notProtected: true
            }
        });
}

export { NfcRoutes };
