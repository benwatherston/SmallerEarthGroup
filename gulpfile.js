const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('es6', () => {
  return gulp.src('src/main.js')
    .pipe(babel({
      presets: ["es2015"]
    }))
    // .pipe(uglify().on('error', (e) => {
    //   console.log(e);
    // }))
    .pipe(gulp.dest('javascripts'));
});

gulp.task('default', ['es6'], () => {
  gulp.watch('src/main.js', ['es6'])
});