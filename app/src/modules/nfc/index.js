import { NfcDemoController } from './javascript/controllers/nfc.demo-controller';
import { NfcRoutes } from './javascript/routes/nfc-routes';

export default angular.module('ngPhone.nfc', [])
    .controller('NfcDemoController', NfcDemoController)
    .config(NfcRoutes);
