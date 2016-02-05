module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'www/libs.js',
            'www/config.js',
            'www/strings.js',
            'www/layouts.js',
            'www/app.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-material/angular-material-mocks.js',
            'app/src/modules/**/javascript/tests/*.js'
        ],
        exclude: [],
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-chrome-launcher'],
        browsers: ['Chrome'],
        reporters: ['progress'],
        port: 7357,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    })
};
