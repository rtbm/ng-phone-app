class ArticlesEditController {
    constructor ($state, CameraService, Config, Articles) {
        "ngInject";
        this.$state = $state;
        this.CameraService = CameraService;
        this.Articles = Articles;

        this.Articles.get({
            articleId: $state.params.articleId
        }, (Article) => {
            Article.image = Config.api + '/' + Article.image;
            this.Article = Article;
        });
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
                this.Article.image = 'data:image/jpeg;base64,' + imageData;
            });
        });
    }

    update (Article) {
       // TODO
    }
}

export { ArticlesEditController };
