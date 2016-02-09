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
        })
        .state('app.articles_edit', {
            url: '/articles/edit/:articleId',
            templateUrl: 'articles/res/layout/articles.edit-view.html',
            controller: 'ArticlesEditController',
            controllerAs: 'ArticlesEditVM'
        })
    ;
}

export { ArticlesRoutes };
