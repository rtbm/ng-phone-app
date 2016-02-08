class NfcDemoController {
    constructor(NfcService) {
        "ngInject";

        this.NfcService = NfcService;

        document.addEventListener('deviceready', () => {
            this.NfcService.NdefListener().then((nfcEvent) => {
                this.data = angular.toJson(nfcEvent);

                this.NfcService.writeTextRecord('hello world!').then(() => {
                    console.log('[NFC] WRITE OK');
                    this.NfcService.NdefListener().cancel();
                }, () => {
                    console.log('[NFC] ERROR');
                });
            });
        });
    }
}

export { NfcDemoController };
