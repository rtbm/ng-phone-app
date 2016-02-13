class GeolocationDemoController {
    constructor(GeolocationService, DeviceService) {
        "ngInject";
        this.GeolocationService = GeolocationService;
        this.DeviceService = DeviceService;

        this.DeviceService.ready().then(() => {
            this.GeolocationService.watchPosition({
                timeout: 3000,
                enableHighAccuracy: true
            }).then(null, (err) => {
                console.log('[GEOLOCATION] ERROR', err);
            }, (position) => {
                this.data = angular.toJson({ lat: position.coords.latitude, long: position.coords.longitude });
            });
        });
    }
}

export { GeolocationDemoController };
