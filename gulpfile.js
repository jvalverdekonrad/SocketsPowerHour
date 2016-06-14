// ----------- //
// Import Gulp //
// ----------- //
const gulp   = require('gulp');
const config = require('./gulp-config');
// -------- //
// Pluggins //
// -------- //
const sass   = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel  = require('gulp-babel');
// --------------------------------------------- //

// ---------- //
// Gulp Tasks //
// ---------- //

// ---- //
// SASS //
// ---- //
gulp.task('sass', function() {
    return gulp.src(config.Dev_SCSS)
        .pipe(sass({
                outputStyle  : 'compressed',
                includePaths : config.Dev_Watchable_SCSS
            }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.Dist_SCSS))
});

// ------------------------------ //
// Concatenate & Minify Vendor JS //
// ------------------------------ //
gulp.task('vendor', function() {
  console.log(config.Vendor_JS);
    return  gulp.src(config.Vendor_JS)
                  .pipe(concat('vendor.js'))
                  .pipe(gulp.dest(config.Dist_JS))
                  .pipe(rename('vendor.min.js'))
                  .pipe(uglify())
                  .pipe(gulp.dest(config.Dist_JS));
});

// ----------------------- //
// Concatenate & Minify JS //
// ----------------------- //
gulp.task('scripts', function() {
    return  gulp.src(config.Dev_JS)
                  .pipe(babel({
                    presets : ['es2015']
                  }))
                  .pipe(concat('app.js'))
                  .pipe(gulp.dest(config.Dist_JS))
                  .pipe(rename('app.min.js'))
                  .pipe(uglify())
                  .pipe(gulp.dest(config.Dist_JS));
});

// ------------- //
// Minifies Html //
// ------------- //
gulp.task('html', function() {
    return  gulp.src(config.Dev_Views)
                  .pipe(gulp.dest(config.Dist_Views))
});

// ----------------------- //
// Watch Files For Changes //
// ----------------------- //
gulp.task('watch', function() {
    gulp.watch(config.Dev_JS, ['scripts']);
    gulp.watch(config.Dev_Watchable_SCSS, ['sass']);
    gulp.watch(config.Dev_Views, ['html']);
});

// ------------ //
// Default Task //
// ------------ //
gulp.task('default', ['sass', 'scripts', 'vendor', 'html','watch']);