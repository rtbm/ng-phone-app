import { DashboardController } from './javascript/controllers/dashboard-controller';
import { DashboardRoutes } from './javascript/routes/dashboard-routes';

export default angular.module('ngPhone.dashboard', [])
    .controller('DashboardController', DashboardController)
    .config(DashboardRoutes);
