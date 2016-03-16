class WeatherController {
    constructor (DeviceService, GeolocationService, WeatherService) {
        "ngInject";
        this.DeviceService = DeviceService;
        this.GeolocationService = GeolocationService;
        this.WeatherService = WeatherService;

        this.DeviceService.ready().then(() => {
            let geolocation = this.GeolocationService.getCurrentPosition({
                timeout: 1200000,
                enableHighAccuracy: true
            });

            geolocation.then((position) => {
                this.WeatherService.getWeather({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude

                }).then((weather) => {
                    this.weather = weather.data;
                });
            });
        });
    }
}

export { WeatherController };
