import { CameraDemoController } from './javascript/controllers/camera.demo-controller';
import { CameraRoutes } from './javascript/routes/camera-routes';

export default angular.module('ngPhone.camera', [])
    .controller('CameraDemoController', CameraDemoController)
    .config(CameraRoutes);
