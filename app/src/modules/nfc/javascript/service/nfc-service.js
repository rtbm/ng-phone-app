function NfcService($q) {
    "ngInject";

    return {
        NdefListener: () => {
            var q = $q.defer();

            nfc.addNdefListener((nfcEvent) => {
                q.resolve(nfcEvent);
            }, () => {
                q.notify('Waiting for NFC');
            }, (err) => {
                q.reject(err);
            });

            return q.promise;
        }
    }
}

export { NfcService };
