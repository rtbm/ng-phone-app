class DashboardController {
    constructor($http, $q, $state, $translate, $mdDialog, $scope, Config, DeviceService, GeolocationService,
        WeatherService, NfcService, Articles) {
        "ngInject";
        this.$http = $http;
        this.$q = $q;
        this.$state = $state;
        this.$translate = $translate;
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
        this.Config = Config;
        this.DeviceService = DeviceService;
        this.GeolocationService = GeolocationService;
        this.WeatherService = WeatherService;
        this.NfcService = NfcService;
        this.Articles = Articles;

        this.articles = this.Articles.query();

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

        let setToolbar = () => {
            let container = document.getElementById('container');
            let header = document.getElementById('header');

            angular.element(container).bind('scroll', () => {
                let bounds = header.getBoundingClientRect();
                this.scrolled = bounds.top < 0;
                this.$scope.$apply();
            });
        }

        setToolbar();
    }

    togglePinned (Article) {
        this.$http({
            url: `${this.Config.api}/v1/articles/toggle-pinned/${Article._id}`,
            method: 'GET'
        }).then((res) => {
            Article.pinned = res.data.pinned;
        });
    }

    readNfcNotifyDialog () {
        let q = this.$q.defer();

        this.$translate(['APP.ARTICLES.NFC.NOTIFY.CONTENT', 'APP.ARTICLES.NFC.NOTIFY.CANCEL']).then((translations) => {
            let notifyDialog = this.$mdDialog.confirm()
                .textContent(translations['APP.ARTICLES.NFC.NOTIFY.CONTENT'])
                .ok(translations['APP.ARTICLES.NFC.NOTIFY.CANCEL']);

            q.resolve(notifyDialog);
        });

        return q.promise;
    }

    readNfcTag () {
        this.DeviceService.ready()
            .then(() => {
                return this.readNfcNotifyDialog();
            })
            .then((notifyDialog) => {
                this.$mdDialog.show(notifyDialog);

                this.NfcService.NdefListener().then((nfcEvent) => {
                    this.$mdDialog.hide(notifyDialog);

                    let payload = nfcEvent.tag.ndefMessage[0].payload;
                    let id = ndef.textHelper.decodePayload(payload);

                    this.Articles.get({ articleId: id }, () => {
                        this.$state.go('app.articles_detail', {
                            articleId: id
                        });
                    });
                });
            });
    }
}

export { DashboardController };
