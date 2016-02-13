class CameraDemoController {
    constructor(CameraService, DeviceService) {
        "ngInject";
        this.CameraService = CameraService;
        this.DeviceService = DeviceService;
    }

    getPicture () {
        this.DeviceService.ready().then(() => {
            this.CameraService.getPicture({
                destinationType: Camera.DestinationType.DATA_URL,
                correctOrientation: true,
                targetWidth: 640
            }).then((imageData) => {
                this.data = imageData;
            });
        });
    }
}

export { CameraDemoController };
