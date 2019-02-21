const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const minify = require('gulp-minify')

gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass'])
})

gulp.task('es6', () => {
    return gulp.src('./js/source/scripts.js')
        .pipe(babel({
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
        }))
        .pipe(minify())
        .pipe(gulp.dest('./js/build'))

})