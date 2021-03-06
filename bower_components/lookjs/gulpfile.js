var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path   = require('path');

gulp.task('looklib', function() {
  return gulp.src('lib/Look.js')
        .pipe(uglify())
        .pipe(rename('Look.min.js'))
        .pipe(gulp.dest('lib'));
})

gulp.task('buildlook', function() {
  return gulp.src(['lib/source/*.js'])
  .pipe(concat('Look.js'))
  .pipe(gulp.dest('lib'));
})


gulp.task('default', ['buildlook']);
