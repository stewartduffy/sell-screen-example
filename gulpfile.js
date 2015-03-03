var gulp        = require('gulp');
var browserSync = require('browser-sync');
// var sass        = require('gulp-sass');
var reload      = browserSync.reload;

var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

var src = {
    scss: 'app/scss/*.scss',
    css:  'app/css',
    html: 'app/*.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['compass'], function() {
    browserSync({
        server: "./app"
    });

    gulp.watch(src.scss, ['compass']);
    gulp.watch(src.html).on('change', reload);
});

gulp.task('compass', function() {
    gulp.src(src.scss)
        .pipe(compass({
            sass: 'app/scss',
            css: src.css,
        }))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(minifyCSS())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);