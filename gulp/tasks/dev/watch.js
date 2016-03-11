var gulp   = require('gulp');
var config = require('../../config.js').watch;
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/**
 * Start browsersync task and then watch files for changes
 * IMPORTANT: you must also specify the files to watch in config.js for Browsersync. See the browserSync.files[...] for more details.
 */
gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.html, ['html']);
  gulp.watch(config.sass, ['scss']);
  gulp.watch(config.css, ['css']);
  gulp.watch(config.scripts, ['scripts']);
  gulp.watch(config.images, ['images']);
  gulp.watch(config.fonts, ['fonts']);
  gulp.watch(config.extras, ['extras']);
});
