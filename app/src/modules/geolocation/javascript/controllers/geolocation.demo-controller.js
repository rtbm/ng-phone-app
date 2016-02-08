class GeolocationDemoController {
    constructor(GeolocationService) {
        "ngInject";

        this.GeolocationService = GeolocationService;

        document.addEventListener('deviceready', () => {
            this.GeolocationService.watchPosition({
                timeout: 3000,
                enableHighAccuracy: true
            }).then(null, () => {
                console.log('[GEOLOCATION] ERROR');
            }, (position) => {
                this.data = angular.toJson({ lat: position.coords.latitude, long: position.coords.longitude });
            });
        });
    }
}

export { GeolocationDemoController };
