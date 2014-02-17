var gulp = require('gulp')
  ,pkg = require('./package.json');

require('gulp-load')(gulp);

gulp.loadTasks(__dirname);


gulp.task('watch', function() {
  gulp.watch(['./src/scripts/**/*.js'],['browserify']);
  gulp.watch(['./src/styles/**/*.scss'],['sass']);
});

gulp.task('default',['connect','browserify','sass','watch']);

