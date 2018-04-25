const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("es6", () => {
  return gulp
    .src([
      "src/functions.js",
      "src/main.js",
      "src/navigation.js",
      "src/contact-modal.js",
      "src/cookie.js"
    ])
    .pipe(concat("main.js"))
    .pipe(
      babel({
        presets: ["es2015"]
      })
    )
    .pipe(
      uglify().on("error", e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest("javascripts"));
});

gulp.task("default", ["es6"], () => {
  gulp.watch("src/**/*.js", ["es6"]);
});
