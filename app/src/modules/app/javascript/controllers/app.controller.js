class AppController {
    constructor($mdSidenav, GlobalsService) {
        "ngInject";
        this.GlobalsService = GlobalsService;
        this.$mdSidenav = $mdSidenav;
    }

    toggleSidenav () {
        this.$mdSidenav('sidenav').toggle();
    }

}

export { AppController };
