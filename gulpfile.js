// Важно!!! Делаем поиск по всему проекту 52temphash и заменяем на +1 к числу, заменяем везде
// 52temphash  затем только билдим проект!!!

//подключаем gulp
const { src, dest, parallel, series, watch } = require('gulp');

// Подключаем расширения для Gulp
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

// Запустить на локальном сервере папку app
function browsersync() {
  browserSync.init({
    server: { baseDir: 'app/' },
    notify: false,
    online: true,
  });
}

// Минифицируем HTML
function htmlToMin() {
  return src(['app/**/*.html'])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(dest('app/html/'));
}

// Bundle для js файлов всё собирается в одни, последовательность соблюдать!
function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.min.js',
    'app/js/lib/swiper-bundle.min.js',
    'app/js/humburger.js',
    'app/js/animationScroll.js',
    'app/js/yandexMap.js',
    'app/js/ancors.js',
    'app/js/popup.js',
    'app/js/swiper.js',
    'app/js/lib/inputmask.min.js',
    'app/js/mask.js',
    'app/js/lib/sweetalert.min.js',
  ])
    .pipe(concat('app52temphash.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream());
}

function scriptsMenu() {
  return src(['app/js/humburger.js'])
    .pipe(concat('appMenu52temphash.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream());
}

// Стили из главного файла scss в css собирается минифицируется, подлючать все css/scss в файл style.scss
function styles() {
  return src('app/sass/style.scss')
    .pipe(sass())
    .pipe(concat('style52temphash.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleanCss({ level: { 1: { specialComments: 0 } } }))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream());
}

// Все картинки из папки src сжимает удачно и ставить в папку dest
function images() {
  return src('app/images/src/**/*')
    .pipe(newer('app/images/dest/'))
    .pipe(imagemin())
    .pipe(dest('app/images/dest/'));
}

// функции очистки
function cleanimg() {
  return del('app/images/dest/**/*', { force: true });
}
function cleanhtml() {
  return del('app/html/**/*', { force: true });
}
function cleanbuild() {
  return del(['dist/**/*', 'app/html/**/*'], { force: true });
}

// Можно подключить файлы которые войдут в бандл, просто копируется с app в dist
function buildcopy() {
  return src(
    [
      'app/css/**/*.min.css',
      'app/**/*.php',
      'app/js/app52temphash.min.js',
      'app/js/appMenu52temphash.min.js',
      'app/images/dest/**/*',
      'app/font/**/*',
      'app/video/**/*',
      'app/html/**/*.html',
      'app/**/*.htaccess',
    ],
    {
      base: 'app',
    },
  ).pipe(dest('dist'));
}

// Следит за изменениями файлов
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
exports.scriptsMenu = scriptsMenu;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.default = parallel(images, styles, scripts, scriptsMenu, browsersync, startwatch);
exports.cleanall = series(cleanbuild, cleanhtml, cleanimg);

// после в папке html вытащить и положить в корень
exports.build = series(cleanbuild, htmlToMin, styles, scripts, scriptsMenu, images, buildcopy);
