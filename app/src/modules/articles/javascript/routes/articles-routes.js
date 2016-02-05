function ArticlesRoutes ($stateProvider) {
    "ngInject";

    $stateProvider
        .state('app.articles', {
            url: '/',
            templateUrl: 'articles/res/layout/articles.list-view.html',
            controller: 'ArticlesListController',
            controllerAs: 'ArticlesListVM'
        });
}

export { ArticlesRoutes };
