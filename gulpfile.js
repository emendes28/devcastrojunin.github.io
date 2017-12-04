var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minify = require('gulp-minify'),
	concat = require('gulp-concat');

var sassConfig = {
	inputDirectory: 'sass/**/*.scss',
	outputDirectory: 'dist/css',
	options: {
		outputStyle: 'compressed'
	}
}

gulp.task('build-css', function() { 
	return gulp
		.src(sassConfig.inputDirectory)
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory));
});

gulp.task('minify-js', function(){
	gulp.src('js/*.js')
   	.pipe(concat('main.js'))
   	.pipe(minify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['build-css']);
});

gulp.task('deploy', ['build-css', 'minify-js'])

