class AccountSigninController {
    constructor ($state, store, jwtHelper, GlobalsService, Account) {
        "ngInject";
        this.$state = $state;
        this.store = store;
        this.jwtHelper = jwtHelper;
        this.GlobalsService = GlobalsService;
        this.Account = Account;

        this.User = {
            email: '',
            password: ''
        };
    }

    submit (User) {
        this.Account.save({ action: 'signin' }, {
            email: User.email,
            password: User.password

        }, (res) => {
            this.store.set('jwt', res.id_token);
            this.GlobalsService.user = this.jwtHelper.decodeToken(res.id_token);
            this.$state.go('app.dashboard');

        }, () => {
            this.error = true;

        });
    }
}

export { AccountSigninController };
