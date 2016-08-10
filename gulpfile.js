var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./scss/**/*.scss')
		.pipe(sass({includePaths: ['./scss']}).on('error', sass.logError))
		.pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function() {
	gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
