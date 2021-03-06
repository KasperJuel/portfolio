// Gulp & gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

// Sass compress & sourcemapping
gulp.task('sass', function () {
    return sass('sass/styles.scss', {
      sourcemap: true,
      style: 'compressed'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch(['sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', 
    ['sass', 'watch', 'webserver']
);

