const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function compileSass() {
  return src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'));
}

function compressImages() {
  return src('src/images/*')
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
    ], {
      verbose: true
    }))
    .on('error', function (err) {
      console.error('Error in compressImages task:', err.toString());
      this.emit('end');
    })
    .pipe(dest('dist/images'));
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  watch('src/scss/**/*.scss', compileSass).on('change', browserSync.reload);
  watch('src/images/*', compressImages).on('change', browserSync.reload);
  watch(['./*.html', './dist/js/*.js']).on('change', browserSync.reload);
}

exports.build = parallel(compileSass, compressImages);
exports.serve = series(serve);
