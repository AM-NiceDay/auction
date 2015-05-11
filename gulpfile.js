var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
	gulp.src('src/client/js/main.js')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('build/client/js'));
});

gulp.task('copy', function() {
	gulp.src('src/client/index.html')
		.pipe(gulp.dest('build/client'));
	gulp.src('src/server.js')
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['default']);
});