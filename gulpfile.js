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
var nodemon    = require('gulp-nodemon');

var env        = process.env.NODE_ENV || 'development';
var outputDir = 'build';

gulp.task('jade', function() {
  return gulp.src('app/src/views/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
});


gulp.task('js', function() {
  return browserify('app/src/js/main.js', { debug: env === 'development' })
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

  return gulp.src('app/src/sass/main.sass')
        .pipe(gulpif(env === 'development', sourcemaps.init()))
        .pipe(sass(config))
        .pipe(gulpif(env === 'development', sourcemaps.write()))
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
});

// gulp.task('connect', function() {
//   connect.server({
//     root: outputDir,
//     livereload: true
//   });
// });

gulp.task('server', function() {
  nodemon({
    script: 'index.js'
  });
});

gulp.task('watch', function() {
  gulp.watch('app/src/views/**/*', ['jade']);
  gulp.watch('app/src/js/**/*.js', ['js']);
  gulp.watch('app/src/sass/**/*.sass', ['css']);
});

gulp.task('default', ['js', 'jade', 'css', 'watch', 'server']);
