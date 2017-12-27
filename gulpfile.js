/* eslint-disable */
require('babel-register')

const gulp = require('gulp')
const paths = require('./config/paths')
const eslint = require('gulp-eslint');
const createBlueKit = require('react-bluekit/lib/createBlueKit').default
const spawn = require('child_process').spawn;
const sass = require('gulp-sass');

createBlueKit({
  // base file of start - this is location where componentsIndex.js will be generated to
  baseDir: paths.appSrc,
  gulp,
  // relative paths from base dir where to look for components
  paths: [ '/components' ],
})

gulp.task('serve', function() {
  gulp.watch("./src/styles/**/*.scss", ['sass']);
  spawn('node', ['scripts/start.js'], { stdio: 'inherit' });
})

// Compile sass into CSS
gulp.task('sass', function() {
  return gulp.src("./src/styles/main.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./src/styles"))
});

// Run ESlint as individual task
gulp.task('lint', () => {
  return gulp.src(['./src/components/**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('default', ['sass', 'build-bluekit', 'serve', 'watch-bluekit'])
