function AccountService(Config, $resource) {
    "ngInject";
    return $resource(Config.api + '/v1/api/account/:action');
}

export { AccountService };
