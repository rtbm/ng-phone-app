class AccountSignupController {
    constructor (Account, $state, store) {
        "ngInject";
        this.Account = Account;
        this.$state = $state;
        this.store = store;

        this.User = {
            email: '',
            password: ''
        };
    }

    submit (User) {
        this.Account.save({ action: 'signup' }, {
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
