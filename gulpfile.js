const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scripty', function(){
  return gulp.src(['lib/*.js', 'src/*.js'])
  .pipe(concat('script.jsx'))
  .pipe(gulp.dest('dist'));
});

gulp.watch(['lib/*.js', 'src/*.js'],['scripty']);

gulp.task('default', ['scripty']);
