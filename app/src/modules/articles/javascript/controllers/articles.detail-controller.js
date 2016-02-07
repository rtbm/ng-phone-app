class ArticlesDetailController {
    constructor ($stateParams, Config, Articles) {
        "ngInject";
        this.Config = Config;
        this.Article = Articles.get({ articleId: $stateParams.articleId });
    }
}

export { ArticlesDetailController };
