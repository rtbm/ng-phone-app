import { WeatherController } from './javascript/controllers/weather-controller';
import { WeatherRoutes } from './javascript/routes/weather-routes';

export default angular.module('ngPhone.weather', [])
    .controller('WeatherController', WeatherController)
    .config(WeatherRoutes);
