var gulp         = require('gulp');
var size         = require('gulp-size');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var gulpFilter   = require('gulp-filter'); // remove some files from the glob (and add them back);
var sourcemaps   = require('gulp-sourcemaps'); // generate source maps for the SCSS;
var plumber      = require('gulp-plumber'); // error trapping so an error doesn't kill Gulp;
var handleErrors = require('../../helpers/handle-errors'); // function to fire on error;
var config       = require('../../config');

// Compile scss into CSS
gulp.task('scss', function() {

  // don’t write sourcemaps of sourcemaps;
  var filter = gulpFilter(['*.css', '!*.map'], {
    restore: true
  });

  var sassConfig = config.scss.options;

  browserSync.notify('Compiling Sass');

  return gulp.src(config.scss.src)
    .pipe(plumber({
      errorHandler: handleErrors
    }))
    // build the sourcemaps;
    .pipe(sourcemaps.init())
    // convert SCSS to CSS;
    .pipe(sass(sassConfig))
    // add vendor prefixes to the CSS;
    .pipe(autoprefixer(config.autoprefixer))
    // filter out the map files;
    .pipe(filter)
    // write the sourcemaps to the CSS;
    .pipe(sourcemaps.write(config.maps))
    // restore map files;
    .pipe(filter.restore)
    // report on their sizes;
    .pipe(size())
    // finally put the compiled CSS into a CSS file;
    .pipe(gulp.dest(config.scss.dest))
    .pipe(browserSync.reload({stream: true}));
});
