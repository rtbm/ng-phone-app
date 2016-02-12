import * as ngPhoneApp from './modules/app';
import * as ngPhoneNfc from './modules/nfc';
import * as ngPhoneCamera from './modules/camera';
import * as ngPhoneGeolocation from './modules/geolocation';
import * as ngPhoneAccount from './modules/account';
import * as ngPhoneArticles from './modules/articles';
import * as ngPhoneWeather from './modules/weather';

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
    'ngPhone.geolocation',
    'ngPhone.account',
    'ngPhone.articles',
    'ngPhone.weather'

]).config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/app/weather');

});
