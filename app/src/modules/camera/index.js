import { CameraService } from './javascript/services/camera-service';
import { CameraDemoController } from './javascript/controllers/camera.demo-controller';
import { CameraRoutes } from './javascript/routes/camera-routes';

export default angular.module('ngPhone.camera', [])
    .service('CameraService', CameraService)
    .controller('CameraDemoController', CameraDemoController)
    .config(CameraRoutes);
