class WeatherController {
    constructor (Config, $http, $translate, GeolocationService) {
        "ngInject";

        this.Config = Config;
        this.$http = $http;
        this.$translate = $translate;
        this.GeolocationService = GeolocationService;

        var activeLanguage = $translate.use() ||
            $translate.storage().get($translate.storageKey()) ||
            $translate.preferredLanguage();

        let getWeather = (coords) => {
            return this.$http({
                method: 'GET',
                skipAuthorization: true,
                url: 'http://api.openweathermap.org/data/2.5/weather?APPID=' + this.Config.weather_api_key
                    + '&lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric&lang=' + activeLanguage
            });
        };

        document.addEventListener('deviceready', () => {
            GeolocationService.getCurrentPosition()
                .then((position) => {
                    getWeather(position.coords)
                        .then((response) => {
                            let data = response.data;

                            this.weather = {
                                description: data.weather[0].description,
                                temp: data.main.temp,
                                humidity: data.main.humidity,
                                pressure: data.main.pressure,
                                clouds: data.clouds.all,
                                sunrise: data.sys.sunrise + '000',
                                sunset: data.sys.sunset + '000',
                                rain: data.rain,
                                snow: data.snow,
                                wind: data.wind
                            };
                        });
                });

        });
    }
}

export { WeatherController };
