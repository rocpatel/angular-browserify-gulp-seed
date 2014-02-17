var notify = require('gulp-notify')
  ,browserify = require('gulp-browserify')
  ,connect = require('gulp-connect');

var browserifyShim = {
  "ng" : {
    path: "./vendor/angular/angular.js",
    exports: "ng"
  },
  "ngRoute" : {
    path: "./vendor/angular-route/angular-route.js",
    exports: "ngRoute",
    depends: {
      ng: "ng"
    }
  },
  "ngResource": {
    path: "./vendor/angular-resource/angular-resource.js",
    exports: "ngResource",
    depends: {
      ng: "ng"
    }
  }

};

module.exports = function (gulp) {
  gulp.task('browserify', function () {
    gulp.src(['./src/scripts/app.js'])
      .pipe(browserify({
        insertGlobals : true,
        debug : true,
        shim: browserifyShim
      })
        .on("error", notify.onError({
          message: "Error: <%= error.message %>",
          title: "Error running browserify"
        }))
        .on("error", function (error) {
          console.log(error.message);
        })
      )
      .pipe(gulp.dest('./public/scripts'))
      .pipe(notify("Browserify complete"))
      .pipe(connect.reload());
  });
}
