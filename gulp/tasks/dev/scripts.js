var gulp   = require('gulp');
var config = require('../../config.js').scripts;
var browserify = require('browserify');
var babelify = require('babelify');
var plumber      = require('gulp-plumber'); // error trapping so an error doesn't kill Gulp;
var handleErrors = require('../../helpers/handle-errors'); // function to fire on error;
var source = require('vinyl-source-stream');
 
gulp.task('scripts', function () {
  browserify({entries: config.src, extensions: ['.js'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(plumber({
      errorHandler: handleErrors
    }))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.dest));
});