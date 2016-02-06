import { NfcService } from './javascript/service/nfc-service';
import { NfcDetailController } from './javascript/controllers/nfc.detail-controller';
import { NfcRoutes } from './javascript/routes/nfc-routes';

export default angular.module('ngPhone.nfc', [])
    .service('NfcService', NfcService)
    .controller('NfcDetailController', NfcDetailController)
    .config(NfcRoutes);
