class CameraDemoController {
    constructor(CameraService) {
        "ngInject";
        this.CameraService = CameraService;
    }

    getPicture () {
        document.addEventListener('deviceready', () => {
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
