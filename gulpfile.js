var gulp = require('gulp');
var print = require('gulp-print');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var data = require('gulp-data');
var gulpif = require('gulp-if');
var args = require('yargs').argv;
var merge = require('merge-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var ngConstant = require('gulp-ng-constant');
var angularTranslate = require('gulp-angular-translate');
var jade = require('gulp-jade');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssNano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var templateCache = require('gulp-angular-templatecache');

var ENV_PRODUCTION = args.env === 'production';
var ENV = ENV_PRODUCTION ? 'dist' : 'build';
var TARGET_DIR = ENV_PRODUCTION ? './www' : './app/build';

gulp.task('build:scripts', function() {
    return browserify({
        entries: './app/src',
        debug: true
    })
        .transform('babelify', { presets: ['es2015'] })
        .bundle()
        .pipe(vinylSourceStream('app.js'))
        .pipe(vinylBuffer())
        .pipe(ngAnnotate())
        .pipe(gulpif(ENV_PRODUCTION, uglify()))
        .pipe(gulp.dest(TARGET_DIR));
});

gulp.task('build:strings', function () {
    return gulp.src('./app/src/modules/**/res/values/strings/*.json')
        .pipe(angularTranslate({
            module: 'ngPhone.strings',
            standalone: true
        }))
        .pipe(gulpif(ENV_PRODUCTION, uglify()))
        .pipe(rename('strings.js'))
        .pipe(gulp.dest(TARGET_DIR));
});

gulp.task('build:layouts', function () {
    return gulp.src('./app/src/modules/**/res/layout/*.jade')
        .pipe(jade())
        .pipe(templateCache('layouts.js', {
            module: 'ngPhone.layouts',
            standalone: true
        }))
        .pipe(gulpif(ENV_PRODUCTION, uglify()))
        .pipe(gulp.dest(TARGET_DIR));
});

gulp.task('build:index', function () {
    return gulp.src('./app/src/index.jade')
        .pipe(jade())
        .pipe(gulp.dest(TARGET_DIR));
});

gulp.task('build:styles', function () {
    return gulp.src('./app/src/modules/**/res/values/styles/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpif(ENV_PRODUCTION, cssNano()))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(TARGET_DIR));
});

gulp.task('build:config', function () {
    return gulp.src('./app/src/configs/' + ENV + '.json')
        .pipe(ngConstant({
            name: 'ngPhone.config'
        }))
        .pipe(rename('config.js'))
        .pipe(gulpif(ENV_PRODUCTION, uglify()))
        .pipe(gulp.dest(TARGET_DIR));
});

gulp.task('build:copy', function () {
    var fonts = gulp.src([
        'bower_components/roboto-fontface/fonts/*.{eot,ijmap,ttf,woff,woff2,svg}',
        'bower_components/material-design-icons/iconfont/*.{eot,ijmap,ttf,woff,woff2,svg}'
    ])
        .pipe(gulp.dest(TARGET_DIR + '/fonts'));

    var styles = gulp.src([
        'bower_components/roboto-fontface/css/roboto-fontface.css',
        'bower_components/angular-material/angular-material.css',
        'bower_components/angular-loading-bar/build/loading-bar.css',
        'bower_components/material-design-icons/iconfont/material-icons.css'
    ])
        .pipe(replace('url(\'../', 'url(\''))
        .pipe(replace('url(MaterialIcons', 'url(fonts/MaterialIcons'))
        .pipe(concat('libs.css'))
        .pipe(gulpif(ENV_PRODUCTION, cssNano()))
        .pipe(gulp.dest(TARGET_DIR));

    var scripts = gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-loading-bar/build/loading-bar.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-messages/angular-messages.js',
        'bower_components/angular-material/angular-material.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-translate/angular-translate.js',
        'bower_components/angular-jwt/dist/angular-jwt.js',
        'bower_components/a0-angular-storage/dist/angular-storage.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulpif(ENV_PRODUCTION, uglify()))
        .pipe(gulp.dest(TARGET_DIR));

    return merge(fonts, styles, scripts);
});

gulp.task('build', ['build:scripts', 'build:strings', 'build:layouts', 'build:index', 'build:styles', 'build:config',
    'build:copy']);

gulp.task('watch', function () {
    gulp.watch([
        './app/src/modules/**/index.js',
        './app/src/modules/**/javascript/**/*.js',
        '!./app/src/modules/**/javascript/tests/*.js'
    ], ['build:scripts']);
    gulp.watch('./app/src/modules/**/res/values/strings/*.json', ['build:strings']);
    gulp.watch('./app/src/modules/**/res/layout/*.jade', ['build:layouts']);
    gulp.watch('./app/src/index.jade', ['build:index']);
    gulp.watch('./app/src/modules/**/res/values/styles/*.less', ['build:styles']);
    gulp.watch('./app/src/configs/' + ENV + '.json', ['build:config']);
});

gulp.task('default', ['build', 'watch']);
