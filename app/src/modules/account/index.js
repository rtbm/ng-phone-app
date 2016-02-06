import { AccountService } from './javascript/services/account-service';
import { AccountSignupController } from './javascript/controllers/account.signup-controller';
import { AccountSigninController } from './javascript/controllers/account.signin-controller';
import { AccountRoutes } from './javascript/routes/account-routes';

export default angular.module('ngPhone.account', [])
    .factory('AccountService', AccountService)
    .controller('AccountSignupController', AccountSignupController)
    .controller('AccountSigninController', AccountSigninController)
    .config(AccountRoutes);
