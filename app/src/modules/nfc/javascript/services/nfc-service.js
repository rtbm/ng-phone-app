function NfcService($q) {
    "ngInject";

    return {
        enabled: () => {
            var q = $q.defer();

            nfc.enabled((nfcEvent) => {
                q.resolve(nfcEvent);
            }, () => {
                q.reject(err);
            });

            return q.promise;
        },

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
        },

        writeTextRecord: (message) => {
            var q = $q.defer();

            nfc.write([ndef.textRecord(message)], (nfcEvent) => {
                q.resolve(nfcEvent);
            }, (err) => {
                q.reject(err);
            });

            return q.promise;
        }
    }
}

export { NfcService };
