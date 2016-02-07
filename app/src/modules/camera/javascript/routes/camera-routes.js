function CameraRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.camera_demo', {
            url: '/camera',
            templateUrl: 'camera/res/layout/camera.demo-view.html',
            controller: 'CameraDemoController',
            controllerAs: 'CameraDemoVM',
            data: {
                notProtected: true
            }
        });
}

export { CameraRoutes };
