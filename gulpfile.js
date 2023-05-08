const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const cleanCss = require("gulp-clean-css");
const htmlMin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');


// Copy html files
gulp.task("html", function (done) {
  gulp
      .src("src/*.html")
      .pipe(fileInclude())
      .pipe(htmlMin({ collapseWhitespace: true }))
      .pipe(gulp.dest("dist")).on("end", done);
});


// Compile sass
gulp.task("sass", function (done) {
  gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 7 versions"],
        cascade: true,
      }))
    .pipe(cleanCss())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest("dist/css"))
    .on("end", done);
});

// Minify images
gulp.task("images", function (done) {
  gulp
      .src("src/images/**/*")
      .pipe(imagemin())
      .pipe(gulp.dest("dist/images"))
      .on("end", done);
});

// Minify and Concatenate js
gulp.task("js", function (done) {
  gulp
      .src("src/js/**/*.js")
      .pipe(uglify())
      .pipe(concat("scripts.min.js"))
      .pipe(gulp.dest("dist/js"))
      .on("end", done);
});

// Clean dist folder
gulp.task("clean", function (done) {
  return gulp.src('dist', {read: false})
      .pipe(clean({force: true}));
})

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: ["dist"],
    },
    port: 9000,
    open: true,
  });
});

// Watch files for changes
gulp.task("watch", function () {
  gulp
      .watch("src/*.html", gulp.series("html"))
      .on("change", browserSync.reload);
  gulp
      .watch("src/images/**/*", gulp.series("images"))
      .on("change", browserSync.reload);
  gulp.watch("src/js/**/*", gulp.series("js")).on("change", browserSync.reload);
  gulp
      .watch("src/scss/**/*.scss", gulp.series("sass"))
      .on("change", browserSync.reload);
});

// Dev task
gulp.task("dev", gulp.parallel("serve", "watch"));

// Build task
gulp.task("build", gulp.series("clean","sass", "images","js","html"));