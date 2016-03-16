class AppController {
    constructor($mdSidenav, GlobalsService, TimerService) {
        "ngInject";
        this.GlobalsService = GlobalsService;
        this.$mdSidenav = $mdSidenav;
        this.TimerService = TimerService;
    }

    toggleSidenav () {
        this.$mdSidenav('sidenav').toggle();
    }

}

export { AppController };
