var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');


gulp.task('default', ['browser']);
gulp.task('browser', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*").on("change", browserSync.reload);

});
gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['browser']);