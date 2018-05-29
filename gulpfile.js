const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

// MAIN.JS
gulp.task('es6', () => {
  return gulp
    .src([
      'javascripts/vendor/jquery-3.3.1.js',
      'javascripts/vendor/slick.js',
      'javascripts/vendor/jquery.magnific-popup.js',
      'src/functions.js',
      'src/main.js',
      'src/navigation.js',
      'src/cookie.js',
      'src/day-slider.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('javascripts'));
});

// TEMPLATES JS
// - HOMEPAGE.JS
gulp.task('homepage', () => {
  return gulp
    .src(['src/defer.js', 'src/template/homepage.js'])
    .pipe(concat('homepage.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest('javascripts'));
});

// - DAY-AT-CAMP.JS
gulp.task('day-at-camp', () => {
  return gulp
    .src(['src/defer.js', 'src/template/day-at-camp.js'])
    .pipe(concat('day-at-camp.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest('javascripts'));
});

// - ROLES-AT-CAMP.JS
gulp.task('roles-at-camp', () => {
  return gulp
    .src([
      'src/defer.js',
      'src/template/roles-at-camp.js',
      'src/custom-slider.js'
    ])
    .pipe(concat('roles-at-camp.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest('javascripts'));
});

// - THE-EXPERIENCE.JS
gulp.task('the-experience', () => {
  return gulp
    .src(['src/defer.js', 'src/template/the-experience.js'])
    .pipe(concat('the-experience.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest('javascripts'));
});

// - CAMP-ACTIVITIES.JS
gulp.task('camp-activities', () => {
  return gulp
    .src(['src/defer.js', 'src/template/camp-activities.js'])
    .pipe(concat('camp-activities.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest('javascripts'));
});

// - SKILLS.JS
gulp.task('skills', () => {
  return gulp
    .src(['src/defer.js', 'src/template/skills.js'])
    .pipe(concat('skills.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest('javascripts'));
});

// - TYPES-OD-CAMP.JS
gulp.task('types-of-camp', () => {
  return gulp
    .src([
      'src/defer.js',
      'src/template/types-of-camp.js',
      'src/custom-slider.js'
    ])
    .pipe(concat('types-of-camp.js'))
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(
      uglify().on('error', e => {
        console.log(e);
      })
    )
    .pipe(gulp.dest('javascripts'));
});

// IMAGE MINIFY
gulp.task('image', () => {
  gulp
    .src('images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'));
});

gulp.task(
  'default',
  [
    'es6',
    'homepage',
    'day-at-camp',
    'roles-at-camp',
    'the-experience',
    'camp-activities',
    'skills',
    'types-of-camp'
  ],
  () => {
    gulp.watch('src/**/*.js', [
      'es6',
      'homepage',
      'day-at-camp',
      'roles-at-camp',
      'the-experience',
      'camp-activities',
      'skills',
      'types-of-camp'
    ]);
  }
);
