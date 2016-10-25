var gulp = require('gulp');

gulp.task('move', function(){
  gulp.src('./src/assets/images/**/*.png')
    .pipe(gulp.dest('./src/dist/assets'));
});
