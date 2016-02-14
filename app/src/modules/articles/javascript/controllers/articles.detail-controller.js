class ArticlesDetailController {
    constructor ($translate, $mdDialog, $stateParams, $q, Config, NfcService, DeviceService, GlobalsService, Articles) {
        "ngInject";
        this.$translate = $translate;
        this.$mdDialog = $mdDialog;
        this.$stateParams = $stateParams;
        this.$q = $q;
        this.Config = Config;
        this.NfcService = NfcService;
        this.DeviceService = DeviceService;
        this.GlobalsService = GlobalsService;
        this.Articles = Articles;

        this.Articles.get({ articleId: this.$stateParams.articleId }, (Article) => {
            this.Article = Article;
            this.Article.image = this.Config.api + '/' + this.Article.image;
        });
    }

    WriteNfcNotifyDialog () {
        let q = this.$q.defer();

        this.$translate(['APP.ARTICLES.NFC.NOTIFY.CONTENT', 'APP.ARTICLES.NFC.NOTIFY.CANCEL']).then((translations) => {
            let notifyDialog = this.$mdDialog.confirm()
                .textContent(translations['APP.ARTICLES.NFC.NOTIFY.CONTENT'])
                .ok(translations['APP.ARTICLES.NFC.NOTIFY.CANCEL']);

            q.resolve(notifyDialog);
        });

        return q.promise;
    }

    writeNfcTag (Article) {
        this.DeviceService.ready()
            .then(() => {
                return this.WriteNfcNotifyDialog();
            })
            .then((notifyDialog) => {
                this.$mdDialog.show(notifyDialog);

                this.NfcService.NdefListener()
                    .then(() => {
                        return this.NfcService.writeTextRecord(Article._id);
                    })
                    .then(() => {
                        this.NfcService.NdefListener().cancel();
                        this.$mdDialog.hide(notifyDialog);
                    });
            });
    }
}

export { ArticlesDetailController };
