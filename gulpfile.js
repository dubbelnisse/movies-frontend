var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var csso = require('gulp-csso');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/js/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('uglify', ['browserify'], function () {
  gulp.src('./dist/js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('sass', function () {
  gulp.src('src/styles/style.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(csso())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('default',['uglify', 'copy', 'sass'], function() {
    return gulp.watch(['src/**/*.*', 'gulpfile.js'], ['uglify', 'copy', 'sass'])
});