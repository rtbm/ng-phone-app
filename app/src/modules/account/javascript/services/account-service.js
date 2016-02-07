function AccountService(Config, $resource) {
    "ngInject";
    return $resource(Config.api + '/v1/account/:action');
}

export { AccountService };
