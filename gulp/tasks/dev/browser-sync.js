var gulp        = require('gulp');
var config      = require('../../config').browserSync;
var browserSync = require('browser-sync'); // synchronised browser testing;
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browserSync', ['build', 'nodemon'], function() {
  browserSync(config);
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server/server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/',
      'app/',
      'dist/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 300);
  });
});
