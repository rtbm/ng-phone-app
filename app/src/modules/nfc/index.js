import { NfcService } from './javascript/services/nfc-service';
import { NfcDemoController } from './javascript/controllers/nfc.demo-controller';
import { NfcRoutes } from './javascript/routes/nfc-routes';

export default angular.module('ngPhone.nfc', [])
    .service('NfcService', NfcService)
    .controller('NfcDemoController', NfcDemoController)
    .config(NfcRoutes);
