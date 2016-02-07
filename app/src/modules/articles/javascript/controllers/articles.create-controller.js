class ArticlesCreateController {
    constructor ($state, CameraService, Articles) {
        "ngInject";
        this.$state = $state;
        this.CameraService = CameraService;
        this.Articles = Articles;

        this.Article = {
            name: '',
            description: '',
            image: ''
        }
    }

    getPicture () {
        document.addEventListener('deviceready', () => {
            this.CameraService.getPicture({
                destinationType: Camera.DestinationType.DATA_URL,
                correctOrientation: true,
                targetWidth: 640,
                targetHeight: 640,
                encodingType: Camera.EncodingType.JPEG

            }).then((imageData) => {
                this.Article.image = imageData;
            });
        });
    }

    create (Article) {
        this.Articles.save(Article, () => {
            this.$state.go('app.articles');
        });
    }
}

export { ArticlesCreateController };
