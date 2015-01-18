//Include Gulp
var gulp = require('gulp');

//Include our Plugins
var minifyCSS = require('gulp-minify-css');

// Minify CSS Task
gulp.task('minify-css', function() {
gulp.src('./assets/css/*.css')
.pipe(minifyCSS({keepBreaks:false}))
.pipe(gulp.dest('./dist/'))
});

// Default Task
gulp.task('default', ['minify-css']);