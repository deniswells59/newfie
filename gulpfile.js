'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var del = require('del');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['html', 'js', 'css']);
gulp.task('watch', ['watch.html', 'watch.js', 'watch.css']);
gulp.task('serve', function() {
  nodemon({
    ignore: ['client', 'public', 'Gulpfile.js']
  });
});

gulp.task('watch.lint', function() {
  return gulp.watch([
    './**/*.js',
    '!node_modules/**/*.js',
    '!public/bower_components/**'
  ]);
});
gulp.task('lint', function() {
  return gulp.src([
    './**/*.js',
    '!node_modules/**',
    '!public/bower_components/**',
    '!GulpFile.js',
    '!public/js/main.js'
  ]);
});

/////////////// JS ///////////////
gulp.task('watch.js', function() {
  return gulp.watch('./client/**/*.js', ['js']);
});

gulp.task('js', ['clean.js'], function() {
  return gulp.src('./client/**/*.js')
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(babel({presets: ['es2015'] }))
    .pipe(concat('main.js'))
    // .pipe(sourcemaps.write())
    // .pipe(annotate())
    // .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});
gulp.task('clean.js', function() {
  return del(['./public/js']);
});

/////////////// CSS ///////////////
gulp.task('css', ['clean.css'],function() {
  return gulp.src('./client/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./public/css'));
});
gulp.task('watch.css', function() {
  return gulp.watch('./client/scss/**', ['css']);
});
gulp.task('clean.css', function() {
  return del(['./public/css']);
});


/////////////// HTML ///////////////
gulp.task('html', ['clean.html'], function(){
  return gulp.src('./client/**/**/*.html')
    .pipe(gulp.dest('./public/html'));
});
gulp.task('clean.html', function() {
  return del(['./public/html/**/*']);
});
gulp.task('watch.html', function() {
  return gulp.watch('./client/**/**', ['html']);
});
