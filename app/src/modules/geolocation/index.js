import { GeolocationDemoController } from './javascript/controllers/geolocation.demo-controller';
import { GeolocationRoutes } from './javascript/routes/geolocation-routes';

export default angular.module('ngPhone.geolocation', [])
    .controller('GeolocationDemoController', GeolocationDemoController)
    .config(GeolocationRoutes);
