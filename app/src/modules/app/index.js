import { AppController } from './javascript/controllers/app.controller';
import { AppRoutes } from './javascript/routes/app-routes';

export default angular.module('ngPhone.app', [])
    .controller('AppController', AppController)
    .config(AppRoutes)
    .config((Config, $translateProvider, $httpProvider, jwtInterceptorProvider) => {
        "ngInject";

        $translateProvider.registerAvailableLanguageKeys(Config.languages);
        $translateProvider.determinePreferredLanguage();

        jwtInterceptorProvider.tokenGetter = function(store) {
            "ngInject";
            return store.get('jwt');
        };

        $httpProvider.interceptors.push('jwtInterceptor');
    });
