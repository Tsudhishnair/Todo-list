const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function(done) {
  console.log("inside gulp");
  done();
});
gulp.task("styles", function(done) {
  gulp
    .src("src/Styles/scss/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("src/Styles/css"));
  done();
});
