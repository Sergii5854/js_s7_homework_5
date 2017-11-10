var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-uglifycss'),
    filter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    streamqueue = require('streamqueue'),
    clone = require('gulp-clone'),
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge-stream'),
    importCss = require('gulp-import-css');


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('styles', function () {

  var source = gulp.src('./src/css/style.scss')
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 5 versions'],
        cascade: false
      }))


  var pipe1 = source.pipe(clone())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/css'));

  var pipe2 = source.pipe(clone())
      .pipe(importCss())
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('./build/css'))
      .pipe(notify("Styles task complete"));

  return merge(pipe1, pipe2);

});

gulp.task('vendors', function () {
  return streamqueue({objectMode: true},
      gulp.src('./src/js/vendor/jquery-3.2.1.min.js'),
      gulp.src('./src/js/vendor/materialize.min.js'),
      gulp.src('./src/js/vendor/materialize.js')
  )
      .pipe(concat('vendors.js'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./build/js'))
      .pipe(notify("Vendor script task complete"));
});


gulp.task('script', function () {
  return streamqueue({objectMode: true},
      gulp.src('./src/js/custom/custom.js')
  )
      .pipe(sourcemaps.init())
      .pipe(concat('custom.js'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/js'))
      .pipe(notify("Custom script task complete"))
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', ['styles', 'vendors', 'script'], function () {
  gulp.watch('src/css/**/*.scss', ['styles']);
  gulp.watch('src/js/vendor/*.js', ['vendorJs']);
  gulp.watch('src/js/custom/*.js', ['scriptsJs']);
});