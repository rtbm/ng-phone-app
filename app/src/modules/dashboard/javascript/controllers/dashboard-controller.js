class DashboardController {
    constructor ($http, Config, Articles) {
        "ngInject";
        this.$http = $http;
        this.Config = Config;
        this.articles = Articles.query();
    }

    togglePinned (Article) {
        this.$http({
            url: `${this.Config.api}/v1/articles/toggle-pinned/${Article._id}`,
            method: 'GET'
        }).then((res) => {
            Article.pinned = res.data.pinned;
        });
    }
}

export { DashboardController };
