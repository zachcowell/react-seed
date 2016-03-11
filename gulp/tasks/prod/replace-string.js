var gulp    = require('gulp');
var replace = require('gulp-replace');

gulp.task('replace-string', function(){
  gulp.src(['dist/*.html'])
    .pipe(replace('../bower_components', 'bower_components'))
    .pipe(gulp.dest('dist/'));
});
