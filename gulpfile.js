var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    spritesmith = require('gulp.spritesmith');

gulp.task('sass', function () {
    return gulp.src('public/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'public'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('public/scss/**/*.scss', ['sass']);
});
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./public/img/source-icons/**/*.*')
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                imgPath: '../img/sprites/sprite.png',
                cssFormat: 'scss',
            }));

    spriteData.img.pipe(gulp.dest('./public/img/sprites/'));
    spriteData.css.pipe(gulp.dest('./public/scss/imports/'));
});