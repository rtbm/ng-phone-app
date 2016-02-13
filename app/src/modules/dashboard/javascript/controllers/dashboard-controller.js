class DashboardController {
    constructor ($http, Config, DeviceService, GeolocationService, WeatherService, Articles) {
        "ngInject";
        this.$http = $http;
        this.Config = Config;
        this.DeviceService = DeviceService;
        this.GeolocationService = GeolocationService;
        this.WeatherService = WeatherService;

        this.articles = Articles.query();

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

    togglePinned (Article) {
        this.$http({
            url: `${this.Config.api}/v1/articles/toggle-pinned/${Article._id}`,
            method: 'GET'
        }).then((res) => {
            Article.pinned = res.data.pinned;
        });
    }
}

export { DashboardController };
