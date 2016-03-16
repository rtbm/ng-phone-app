class AccountSettingsController {
    constructor ($mdDialog, $translate, store, jwtHelper, GlobalsService, Account) {
        "ngInject";
        this.$mdDialog = $mdDialog;
        this.$translate = $translate;
        this.store = store;
        this.jwtHelper = jwtHelper;
        this.GlobalsService = GlobalsService;
        this.Account = Account;

        this.User = this.GlobalsService.user;
    }

    showConfirmation () {
        this.$translate(['APP.ACCOUNT.CONFIRMATION.CONTENT', 'APP.ACCOUNT.CONFIRMATION.OK']).then((translations) => {
            let confirmationDialog = this.$mdDialog.confirm()
                .clickOutsideToClose(true)
                .textContent(translations['APP.ACCOUNT.CONFIRMATION.CONTENT'])
                .ok(translations['APP.ACCOUNT.CONFIRMATION.OK']);

            this.$mdDialog.show(confirmationDialog);
        });
    }

    update (User) {
        let user = new this.Account(User);

        user.$update((res) => {
            this.store.set('jwt', res.id_token);
            this.GlobalsService.user = this.jwtHelper.decodeToken(res.id_token);
            this.showConfirmation();
        });
    }
}

export { AccountSettingsController };
