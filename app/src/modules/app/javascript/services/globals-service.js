class GlobalsService {
    constructor ($translate) {
        "ngInject";
        let globals = {};

        globals.activeLanguage = $translate.use()
            || $translate.storage().get($translate.storageKey())
            || $translate.preferredLanguage();

        return globals;
    }
}

export { GlobalsService };
