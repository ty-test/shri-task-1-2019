const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('css', function () {
    const processors = [require('autoprefixer'), require('postcss-nested')({ bubble: ['phone'] })];

    return gulp.src('src/styles/**.css')
        .pipe( postcss(processors) )
        .pipe( gulp.dest('build/') )
});

gulp.task('watch', function () {
    gulp.watch('**/*.css', ['css'])
});

gulp.task('default', ['css', 'watch']);