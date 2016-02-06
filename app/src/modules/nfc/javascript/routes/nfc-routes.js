function NfcRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.nfc_demo', {
            url: '/',
            templateUrl: 'nfc/res/layout/nfc.demo-view.html',
            controller: 'NfcDemoController',
            controllerAs: 'NfcDemoVM'
        });
}

export { NfcRoutes };
