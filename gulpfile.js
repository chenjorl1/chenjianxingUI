const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifycss = require('gulp-minify-css');

gulp.task('sass', async function() {
    return gulp.src('components/css/**/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
})