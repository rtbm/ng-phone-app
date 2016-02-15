import './modules/app';
import './modules/account';
import './modules/articles';
import './modules/weather';
import './modules/dashboard';
import './modules/timer';

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
    'ngPhone.dashboard',
    'ngPhone.timer'

]).config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/app/dashboard');
});
