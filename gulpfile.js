var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var compass     = require('gulp-compass');
var minifyCSS   = require('gulp-minify-css');

var src = {
    scss: 'app/scss/*.scss',
    css:  'app/css',
    html: 'app/*.html',
    jsFiles: [
    "app/js/angular.js",
    "app/js/app.js",
    "app/js/controllers/salesScreenCtrl.js",
    "app/js/services/currencyCalc.js"
    ]
};

// Static Server + watching scss/html files
gulp.task('serve', ['compass-dev'], function() {
    browserSync({
        server: "./app"
    });

    gulp.watch(src.scss, ['compass-dev']);
    gulp.watch(src.html).on('change', reload);
});

gulp.task('compass-dev', function() {
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

gulp.task('compass', function() {
    gulp.src(src.scss)
        .pipe(compass({
            sass: 'app/scss',
            css: 'app/dist/css',
        }))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(minifyCSS())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
    gulp.src(src.jsFiles)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/js/'));
});

gulp.task('copy', function() {
    gulp.src('app/index.html')
      .pipe(gulp.dest('app/dist/'));
});

gulp.task('build', ['scripts', 'copy', 'compass']);

gulp.task('default', ['serve']);