function ArticlesRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.articles', {
            url: '/articles',
            templateUrl: 'articles/res/layout/articles.list-view.html',
            controller: 'ArticlesListController',
            controllerAs: 'ArticlesListVM'
        })
        .state('app.articles_create', {
            url: '/articles/create',
            templateUrl: 'articles/res/layout/articles.create-view.html',
            controller: 'ArticlesCreateController',
            controllerAs: 'ArticlesCreateVM'
        })
        .state('app.articles_detail', {
            url: '/articles/detail/:articleId',
            templateUrl: 'articles/res/layout/articles.detail-view.html',
            controller: 'ArticlesDetailController',
            controllerAs: 'ArticlesDetailVM'
        });
}

export { ArticlesRoutes };
