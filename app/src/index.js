import * as ngPhoneApp from './modules/app';
import * as ngPhoneAccount from './modules/account';
import * as ngPhoneArticles from './modules/articles';
import * as ngPhoneWeather from './modules/weather';
import * as ngPhoneDashboard from './modules/dashboard';

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
    'ngPhone.articles',
    'ngPhone.weather',
    'ngPhone.dashboard'

]).config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/app/dashboard');

});
