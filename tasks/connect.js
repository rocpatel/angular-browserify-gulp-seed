var connect = require('gulp-connect');

module.exports = function (gulp) {
  gulp.task('connect', connect.server({
    root: ['public'],
    port: 18080,
    livereload: true,
    open: {
      browser: 'Google Chrome'
    }
  }));
}
