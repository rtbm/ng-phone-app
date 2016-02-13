class AccountProfileController {
    constructor (store, GlobalsService) {
        "ngInject";
        this.store = store;
        this.GlobalsService = GlobalsService;

        this.User = this.GlobalsService.user;
    }
}

export { AccountProfileController };
