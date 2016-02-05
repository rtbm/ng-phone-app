class AppController {
    constructor($mdSidenav) {
        "ngInject";

        this.$mdSidenav = $mdSidenav;
    }

    openSidenav () {
        this.$mdSidenav('sidenav').toggle();
    }

}

export { AppController };
