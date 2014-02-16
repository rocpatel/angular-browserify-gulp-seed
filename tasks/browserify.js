var notify = require('gulp-notify')
  ,browserify = require('gulp-browserify')
  ,connect = require('gulp-connect');

module.exports = function (gulp) {
  gulp.task('browserify', function () {
    gulp.src(['./src/scripts/app.js'])
      .pipe(browserify({
        insertGlobals : true,
        debug : true
      })
        .on("error", notify.onError("Browserify error"))
      )
      .pipe(gulp.dest('./public/scripts'))
      .pipe(notify("Browserify complete"))
      .pipe(connect.reload());
  });
}
