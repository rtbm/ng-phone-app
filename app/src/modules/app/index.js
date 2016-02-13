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

        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
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
