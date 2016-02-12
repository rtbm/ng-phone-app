function GeolocationService($q) {
    "ngInject";

    return {
        getCurrentPosition: (options) => {
            var q = $q.defer();

            navigator.geolocation.getCurrentPosition((position) => {
                q.resolve(position);
            }, (err) => {
                q.reject(err);
            }, options);

            return q.promise;
        },

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
