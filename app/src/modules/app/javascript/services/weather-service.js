class WeatherService {
    constructor (Config, $http, $q, store, GlobalsService, DeviceService) {
        "ngInject";
        this.Config = Config;
        this.$http = $http;
        this.$q = $q;
        this.store = store;
        this.GlobalsService = GlobalsService;
        this.DeviceService = DeviceService;
    }

    getWeather (coords) {
        let q = this.$q.defer();
        let ts = (new Date()).getTime();
        let weather = this.store.get('weather');

        if (weather && weather.timestamp + (10*60*1000) > ts) {
            q.resolve(weather);

        } else {
            this.$http({
                method: 'GET',
                skipAuthorization: true,
                url: `http://api.openweathermap.org/data/2.5/weather?APPID=${this.Config.weather_api_key}`
                + `&lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=`
                + `${this.GlobalsService.activeLanguage}`

            }).then((res) => {
                let weather = {
                    timestamp: ts,
                    data: {
                        description: res.data.weather[0].description,
                        temp: res.data.main.temp,
                        humidity: res.data.main.humidity,
                        pressure: res.data.main.pressure,
                        clouds: res.data.clouds.all,
                        sunrise: res.data.sys.sunrise + '000',
                        sunset: res.data.sys.sunset + '000',
                        rain: res.data.rain,
                        snow: res.data.snow,
                        wind: res.data.wind
                    }
                };
                this.store.set('weather', weather);
                q.resolve(weather);
            });
        }

        return q.promise;
    }
}

export {WeatherService };
