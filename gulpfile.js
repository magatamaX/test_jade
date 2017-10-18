var gulp = require('gulp');
var jade = require('gulp-jade');
// var jadePhp = require('gulp-jade-php');
var browserSync = require('browser-sync');

gulp.task('jade', function(){
  
  return gulp.src(['./src/jade/**/*.jade', '!./src/jade/**/_*.jade'])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});
  
  
gulp.task('browser-sync', function() {
    browserSync({
        server: {
             baseDir: "./",
            index  : "index.html" 
        }
    });
});

gulp.task('bs-reload', function(){
  browserSync.reload();
});

//
//監視ファイル
//
gulp.task('watch', function () {
    gulp.watch("./src/jade/**/*.jade", ['jade']);
    gulp.watch("./css/*.css",          ['bs-reload']);
    gulp.watch("./*.html",             ['bs-reload']);
});
// default tasks
gulp.task('default', ['jade', 'browser-sync', 'bs-reload', 'watch']);