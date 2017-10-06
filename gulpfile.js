/**
 *  The '--production' parameter allows to minimize the JS and CSS code.
 *
 *  Minimal requirements: NodeJS v6.9+, gulp module installed globally, i.e., use 'npm install -g gulp'.
 *
 *  NOTE: for the first time, one need to execute: 'npm install' to get all the NodeJS
 *        dependency modules described in the package.json file and used by this gulp file.
 */


// dependency NodeJS modules
const argv = require( "yargs").argv,
  gulp = require( "gulp"),
  concat = require( "gulp-concat"),
  notify = require("gulp-notify"),
  gulpif = require("gulp-if"),
  uglify = require("gulp-uglify"),
  tap = require("gulp-tap"),
  del = require("del"),
  jshint = require('gulp-jshint');

// the folder where the distribution library file is created.
var buildFolder = "dist";

// build the cLASSlib.js file
gulp.task( "build", function() {
  return gulp.src([
      "src/browserShims.js",
      "src/errorTypes.js",
	  "src/eNUMERATION.js",
      "src/oBJECTvIEW.js",
      "src/cLASS.js"
	  ])
    .pipe( concat("cLASSlib.js"))
    .pipe( gulpif( argv.production, uglify()))
    .pipe( gulp.dest( buildFolder))
    .pipe( notify({message: "'build-cLASSlib' task completed."}));
});


gulp.task('dev', function () {
  gulp.src([
      "src/browserShims.js",
      "src/errorTypes.js",
	  "src/eNUMERATION.js",
      "src/oBJECTvIEW.js",
      "src/cLASS.js"
  ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});
