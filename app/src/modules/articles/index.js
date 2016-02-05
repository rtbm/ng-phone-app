import { ArticlesListController } from './javascript/controllers/articles.list-controller';
import { ArticlesRoutes } from './javascript/routes/articles-routes';

export default angular.module('ngPhone.articles', [])
    .controller('ArticlesListController', ArticlesListController)
    .config(ArticlesRoutes);
