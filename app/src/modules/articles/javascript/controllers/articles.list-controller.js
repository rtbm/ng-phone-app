class ArticlesListController {
    constructor (Config, Articles) {
        "ngInject";
        this.Config = Config;
        this.articles = Articles.query()
    }
}

export { ArticlesListController };
