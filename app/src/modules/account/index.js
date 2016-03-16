import { AccountService } from './javascript/services/account-service';
import { AccountSignupController } from './javascript/controllers/account.signup-controller';
import { AccountSigninController } from './javascript/controllers/account.signin-controller';
import { AccountSettingsController } from './javascript/controllers/account.settings-controller';
import { AccountProfileController } from './javascript/controllers/account.profile-controller';
import { AccountRoutes } from './javascript/routes/account-routes';

export default angular.module('ngPhone.account', [])
    .factory('Account', AccountService)
    .controller('AccountSignupController', AccountSignupController)
    .controller('AccountSigninController', AccountSigninController)
    .controller('AccountSettingsController', AccountSettingsController)
    .controller('AccountProfileController', AccountProfileController)
    .config(AccountRoutes)
    .run(($rootScope, $state, store, jwtHelper, GlobalsService, Account) => {
        "ngInject";
        Account.get({
            action: 'me'
        }, () => {
            GlobalsService.user = jwtHelper.decodeToken(store.get('jwt'));
        }, () => {
            store.remove('jwt');
            GlobalsService.user = {};
            $state.go('app.account_signin');
        });
    });
