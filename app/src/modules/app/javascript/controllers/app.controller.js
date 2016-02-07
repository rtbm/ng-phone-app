class AppController {
    constructor($mdSidenav, store) {
        "ngInject";
        this.store = store;
        this.$mdSidenav = $mdSidenav;
    }

    toggleSidenav () {
        this.$mdSidenav('sidenav').toggle();
    }

}

export { AppController };
