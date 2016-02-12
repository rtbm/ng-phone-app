class ArticlesEditController {
    constructor ($state, CameraService, Config, Articles) {
        "ngInject";
        this.$state = $state;
        this.CameraService = CameraService;
        this.Config = Config;
        this.Articles = Articles;

        this.Articles.get({
            articleId: this.$state.params.articleId
        }, (Article) => {
            Article.image = this.Config.api + '/' + Article.image;
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
        let article = new this.Articles(Article);

        article.$update(() => {
            this.$state.go('app.articles');
        });
    }
}

export { ArticlesEditController };
