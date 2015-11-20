var gulp       = require('gulp');
var jade       = require('gulp-jade');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');
var streamify  = require('gulp-streamify');
var gulpif     = require('gulp-if');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect    = require('gulp-connect');
var html       = require('gulp-minify-html');

var env        = process.env.NODE_ENV || 'development';
var outputDir = 'build';

gulp.task('html', function() {
  var opts = {
    empty: true,
    spare: true,
  };
  return gulp.src('app/views/**/*.html')
        .pipe(html())
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
});


gulp.task('js', function() {
  return browserify('app/js/main.js', { debug: env === 'development' })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulpif(env === 'production',  streamify(uglify())))
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
  var config = {};

  if (env === 'production') {
    config.outputStyle = 'compressed';
  }

  return gulp.src('app/sass/main.sass')
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(sass(config))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('watch', function() {
  // gulp.watch('app/views/**/*', ['jade']);
  gulp.watch('app/views/**/*.html', ['html']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/sass/**/*.sass', ['css']);
});

gulp.task('default', ['js', 'html', 'css', 'watch', 'connect']);
