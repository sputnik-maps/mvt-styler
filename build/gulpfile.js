var util = require('util');
var del = require('del');
var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

var distPath = '../dist';

var webpack = require('webpack-stream');


gulp.task('default', ['clean'], function() {
	var stream = gulp.src('../app/js/app.js')
		.pipe(webpack({
			watch: false,
			entry: {
				app: '../app/js/app.js',
				res: '../app/res/styles.js'
			},
			output: {
				filename: '[name].js'
			}
		}));
	return stream.pipe(gulp.dest(distPath))
	// .pipe($.streamify($.uglify({preserveComments:'license'})))
		.pipe($.uglify())
		// .pipe($.uglify({preserveComments:'license'}))
		.pipe($.rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(distPath))

});

gulp.task('watch', ['clean'], function() {
	var stream = gulp.src('../app/js/app.js')
		.pipe(webpack({
			watch: true,
			devtool: 'source-map',
			entry: {
				app: '../app/js/app.js',
				res: '../app/res/styles.js'
			},
			output: {
				filename: '[name].js'
			}
		}));
	return stream.pipe(gulp.dest(distPath))
		// .pipe($.streamify($.uglify({preserveComments:'license'})))
		// .pipe($.uglify())
		// .pipe($.uglify({preserveComments:'license'}))
		.pipe($.rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(distPath))

});






// Clean output directory
gulp.task('clean', del.bind(null, [distPath + '/*', '!' + distPath + '/.git'], {dot: true, force: true}));
