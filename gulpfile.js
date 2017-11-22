var gulp = require('gulp'),
	sass = require('gulp-sass');

var sassConfig = {
	inputDirectory: 'sass/**/*.scss',
	outputDirectory: 'css',
	options: {
		outputStyle: 'expanded'
	}
}

gulp.task('build-css', function() {
	return gulp
		.src(sassConfig.inputDirectory)
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory));
});

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['build-css']);
});
