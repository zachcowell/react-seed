var gulp        = require('gulp');
var config      = require('../../config.js').html;
var size        = require('gulp-size');
var browserSync = require('browser-sync'); // synchronised browser testing;

gulp.task('html', function() {
  browserSync.notify('Copying HTML');
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(size())
    .pipe(browserSync.reload({
      stream: true
    }));;
});
