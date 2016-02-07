import ngPhoneApp from './modules/app';
import ngPhoneNfc from './modules/nfc';
import ngPhoneCamera from './modules/camera';
import ngPhoneAccount from './modules/account';
import ngPhoneArticles from './modules/articles';

angular.module('ngPhone', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'pascalprecht.translate',
    'angular-loading-bar',
    'angular-jwt',
    'angular-storage',
    'ngPhone.config',
    'ngPhone.strings',
    'ngPhone.layouts',
    'ngPhone.app',
    'ngPhone.nfc',
    'ngPhone.camera',
    'ngPhone.account',
    'ngPhone.articles'

]).config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/app/articles');

}).run(($rootScope, $state, store) => {
    "ngInject";
    $rootScope.$on('$stateChangeStart', (event, toState) => {
        if(!store.get('jwt') && !(toState.data && toState.data.notProtected)) {
            event.preventDefault();
            $state.go('app.account_signin');
        }
    });
});
