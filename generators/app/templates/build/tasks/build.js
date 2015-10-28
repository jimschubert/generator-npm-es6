'use strict';
var gulp = require('gulp');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');
var paths = require('../paths');

// this task calls the clean task (located
// in ./clean.js), then runs lint
// Add subsequent tasks to the sequence.
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    'lint',
    'build:babel',
    callback
    );
});

gulp.task('build:babel', function () {
  return gulp.src(paths.sourceJavascript)
    .pipe(babel())
    .pipe(gulp.dest(paths.dist));
});