function NfcRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.nfc_test', {
            url: '/',
            templateUrl: 'nfc/res/layout/nfc.detail-view.html',
            controller: 'NfcDetailController',
            controllerAs: 'NfcDetailVM'
        });
}

export { NfcRoutes };
