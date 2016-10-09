const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');

gulp.task('es6', () => {
    browserify('src/app.js')
        .transform('babelify', {
            presets: ['es2015'],
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build'))
});

gulp.task('styles', () => {
    gulp.src('css/src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/build/'));
});

gulp.task('default', ['es6', 'styles'], () => {
    gulp.watch('src/**/*.js', ['es6']);
    gulp.watch('css/src/**/*.scss', ['styles']);
});
