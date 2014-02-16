var notify = require('gulp-notify')
  ,sass = require('gulp-sass')
  ,connect = require('gulp-connect');

module.exports = function (gulp){
  gulp.task('sass', function() {
    gulp.src(['./src/styles/**/*.scss'])
      .pipe(sass()
        .on("error", notify.onError("Error compiling sass"))
      )
      .pipe(gulp.dest('./public/styles'))
      .pipe(notify("Sass complete"))
      .pipe(connect.reload());
  });
}
