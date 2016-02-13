class NfcDemoController {
    constructor(NfcService, DeviceService) {
        "ngInject";
        this.NfcService = NfcService;
        this.DeviceService = DeviceService;

        this.DeviceService.ready().then(() => {
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
