const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// gulp.task("jonsTask", function() {
//   console.log("*********************");
//   console.log("jonsTask");
//   console.log("*********************");
// });

// gulp.task("default", () => console.log("Arrow functions work in Gulp tasks?"));

// browserSync.init({
//   server: "./"
// });
// browserSync.stream();

gulp.task('browser-sync', function() {
  browserSync.init({
     server: {
        baseDir: './',
     }
  });
});