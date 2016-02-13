class WeatherController {
    constructor (DeviceService, GeolocationService, WeatherService) {
        "ngInject";
        this.DeviceService = DeviceService;
        this.GeolocationService = GeolocationService;
        this.WeatherService = WeatherService;

        this.DeviceService.ready()
            .then(() => {
                return this.GeolocationService.getCurrentPosition()
            })
            .then((position) => {
                return this.WeatherService.getWeather(position.coords);
            })
            .then((weather) => {
                this.weather = weather.data;
            });
    }
}

export { WeatherController };
