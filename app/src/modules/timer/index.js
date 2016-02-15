import { TimerController } from './javascript/controllers/timer-controller';
import { TimerService } from './javascript/services/timer-service';
import { TimerRoutes } from './javascript/routes/timer-routes';

export default angular.module('ngPhone.timer', [])
    .controller('TimerController', TimerController)
    .service('TimerService', TimerService)
    .config(TimerRoutes);
