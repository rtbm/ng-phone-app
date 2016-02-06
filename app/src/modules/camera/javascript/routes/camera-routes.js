function CameraRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.camera_demo', {
            url: '/',
            templateUrl: 'camera/res/layout/camera.demo-view.html',
            controller: 'CameraDemoController',
            controllerAs: 'CameraDemoVM'
        });
}

export { CameraRoutes };
