const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync.init({
     server: {
        baseDir: './',
     }
  });
});