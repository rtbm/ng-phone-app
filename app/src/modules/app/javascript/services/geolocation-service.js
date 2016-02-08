function GeolocationService($q) {
    "ngInject";

    return {
        watchPosition: (options) => {
            var q = $q.defer();

            var watchId = navigator.geolocation.watchPosition((position) => {
                q.notify(position);
            }, (err) => {
                q.reject(err);
            }, options);

            q.promise.cancel = () => {
                navigator.geolocation.clearWatch(watchId);
            };

            return q.promise;
        }
    }
}

export { GeolocationService };
