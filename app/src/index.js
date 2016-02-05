import ngPhoneApp from './modules/app';
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
    'ngPhone.account',
    'ngPhone.articles'

]).config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/app/');

});
