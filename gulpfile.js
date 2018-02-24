var gulp = require('gulp'); // Подключаем Gulp
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

//autoprefix
gulp.task('css', () =>
    gulp.src("app/css/*.css")
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
);

//css nano for small css 
gulp.task('css', function() {
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});