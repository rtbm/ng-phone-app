import { NfcService } from './javascript/services/nfc-service';
import { CameraService } from './javascript/services/camera-service';
import { GeolocationService } from './javascript/services/geolocation-service';
import { DeviceService } from './javascript/services/device-service';
import { GlobalsService } from './javascript/services/globals-service';
import { WeatherService } from './javascript/services/weather-service';
import { AppController } from './javascript/controllers/app.controller';
import { AppRoutes } from './javascript/routes/app-routes';

export default angular.module('ngPhone.app', [])
    .factory('CameraService', CameraService)
    .factory('NfcService', NfcService)
    .factory('GeolocationService', GeolocationService)
    .factory('DeviceService', DeviceService)
    .service('GlobalsService', GlobalsService)
    .service('WeatherService', WeatherService)
    .controller('AppController', AppController)
    .config(AppRoutes)
    .config((Config, $translateProvider, $httpProvider, jwtInterceptorProvider, $mdThemingProvider) => {
        "ngInject";
        $translateProvider.registerAvailableLanguageKeys(Config.languages);
        $translateProvider.determinePreferredLanguage();

        jwtInterceptorProvider.tokenGetter = (store) => {
            "ngInject";
            return store.get('jwt');
        };

        $httpProvider.interceptors.push('jwtInterceptor');

        let customPrimary = {
            '50': '#e4f5fa',
            '100': '#cfeef6',
            '200': '#b9e6f2',
            '300': '#a4deee',
            '400': '#8ed7ea',
            '500': '#79CFE6',
            '600': '#63c7e2',
            '700': '#4ec0de',
            '800': '#39b8da',
            '900': '#27aed2',
            'A100': '#fafdfe',
            'A200': '#ffffff',
            'A400': '#ffffff',
            'A700': '#239cbc'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
                customPrimary);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary')
            .accentPalette('red');

    }).run(($rootScope, $state, store) => {
        "ngInject";
        $rootScope.$on('$stateChangeStart', (event, toState) => {
            if (!store.get('jwt') && !(toState.data && toState.data.notProtected)) {
                event.preventDefault();
                $state.go('app.account_signin');
            }
        });
    });
;
