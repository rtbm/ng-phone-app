import { AccountService } from './javascript/services/account-service';
import { AccountSignupController } from './javascript/controllers/account.signup-controller';
import { AccountSigninController } from './javascript/controllers/account.signin-controller';
import { AccountSettingsController } from './javascript/controllers/account.settings-controller';
import { AccountRoutes } from './javascript/routes/account-routes';

export default angular.module('ngPhone.account', [])
    .factory('Account', AccountService)
    .controller('AccountSignupController', AccountSignupController)
    .controller('AccountSigninController', AccountSigninController)
    .controller('AccountSettingsController', AccountSettingsController)
    .config(AccountRoutes)
    .run(($rootScope, $state, store, Account) => {
        "ngInject";
        Account.get({
            action: 'me'
        }, () => {
            $state.reload();
        }, () => {
            store.remove('jwt');
            $state.go('app.account_signin');
        });
    });
