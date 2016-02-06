class NfcDemoController {
    constructor(NfcService) {
        "ngInject";

        document.addEventListener('deviceready', () => {
            NfcService.NdefListener().then((nfcEvent) => {
                this.data = angular.toJson(nfcEvent);

                NfcService.writeTextRecord('hello world!').then(() => {
                    console.log('[NFC] WRITE OK');

                }, () => {
                    console.log('[NFC] ERROR');

                });
            });
        });
    }
}

export { NfcDemoController };
