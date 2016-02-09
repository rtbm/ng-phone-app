class ArticlesDetailController {
    constructor ($stateParams, Config, Articles) {
        "ngInject";

        Articles.get({ articleId: $stateParams.articleId }, (Article) => {
            Article.image = Config.api + '/' + Article.image;
            this.Article = Article;
        });
    }
}

export { ArticlesDetailController };
