class AccountSignupController {
    constructor (AccountService, $state, store) {
        "ngInject";
        this.AccountService = AccountService;
        this.$state = $state;
        this.store = store;

        this.User = {
            email: '',
            password: ''
        };
    }

    submit (User) {
        this.AccountService.save({ action: 'signup' }, {
            email: User.email,
            password: User.password

        }, (res) => {
            this.store.set('jwt', res.id_token);
            this.$state.go('app.articles');

        }, () => {
            this.error = true;

        });
    }
}

export { AccountSignupController };
