class CameraDemoController {
    constructor(CameraService) {
        "ngInject";
        this.CameraService = CameraService;
    }

    takePicture () {
        document.addEventListener('deviceready', () => {
            this.CameraService.getPicture({
                destinationType: Camera.DestinationType.DATA_URL,
                correctOrientation: true,
                targetWidth: 640
            }).then((imageData) => {
                this.data = 'data:image/jpeg;base64,' + imageData;
            });
        });
    }
}

export { CameraDemoController };
