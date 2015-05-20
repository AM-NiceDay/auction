var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon')

gulp.task('browserify', function() {
	gulp.src('client/js/main.js')
		.pipe(browserify({transform: 'reactify'}))
		.on('error', function(error) {
			console.log(error.toString());
		})
		.pipe(concat('main.js'))
		.pipe(gulp.dest('assets/js'));
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['client/*', 'assets/*']
  }).on('log', function(event) {
  	console.log(event.message);
  });
});

gulp.task('watch', ['nodemon', 'browserify'], function() {
	gulp.watch('client/**/*.js', ['browserify']);
});