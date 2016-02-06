class NfcDetailController {
    constructor(NfcService) {
        "ngInject";

        document.addEventListener('deviceready', () => {
            NfcService.NdefListener().then((nfcEvent) => {
                this.data = angular.toJson(nfcEvent);
            });
        });
    }
}

export { NfcDetailController };
