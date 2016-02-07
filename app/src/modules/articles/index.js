import { ArticlesService } from './javascript/services/articles-service';
import { ArticlesListController } from './javascript/controllers/articles.list-controller';
import { ArticlesCreateController } from './javascript/controllers/articles.create-controller';
import { ArticlesDetailController } from './javascript/controllers/articles.detail-controller';
import { ArticlesRoutes } from './javascript/routes/articles-routes';

export default angular.module('ngPhone.articles', [])
    .factory('Articles', ArticlesService)
    .controller('ArticlesListController', ArticlesListController)
    .controller('ArticlesCreateController', ArticlesCreateController)
    .controller('ArticlesDetailController', ArticlesDetailController)
    .config(ArticlesRoutes);
