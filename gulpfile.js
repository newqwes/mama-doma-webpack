const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const htmlmin = require('gulp-htmlmin');

function browsersync() {
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false,
        online: true,
    });
}

function htmlToMin() {
    return src(['app/**/*.html'])
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true,
            })
        )
        .pipe(dest('app/html/'));
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'app/js/ancors.js',
        'app/js/hover.js',
        'app/js/animationScroll.js',
        'app/js/yandexMap.js',
        'app/js/popup.js',
        'app/js/lib/inputmask.min.js',
        'app/js/mask.js',
        'app/js/lib/sweetalert.min.js',
        'app/js/form.js',
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream());
}

function styles() {
    return src('app/sass/style.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleanCss({ level: { 1: { specialComments: 0 } } }))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream());
}

function images() {
    return src('app/images/src/**/*').pipe(newer('app/images/dest/')).pipe(imagemin()).pipe(dest('app/images/dest/'));
}

function cleanimg() {
    return del('app/images/dest/**/*', { force: true });
}
function cleanhtml() {
    return del('app/html/**/*', { force: true });
}
function cleanbuild() {
    return del(['dist/**/*', 'app/html/**/*'], { force: true });
}

function buildcopy() {
    return src(
        [
            'app/css/**/*.min.css',
            'app/**/*.php',
            'app/js/app.min.js',
            'app/images/dest/**/*',
            'app/font/**/*',
            'app/video/**/*',
            'app/html/**/*.html',
        ],
        {
            base: 'app',
        }
    ).pipe(dest('dist'));
}

function startwatch() {
    watch('app/**/*.scss', styles);
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/images/src/**/*', images);
}
// команды gulp
exports.htmlToMin = htmlToMin;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.default = parallel(images, styles, scripts, browsersync, startwatch);
exports.cleanall = series(cleanbuild, cleanhtml, cleanimg);
exports.build = series(cleanbuild, htmlToMin, styles, scripts, images, buildcopy); // после в папке html вытащить и положить в корень
