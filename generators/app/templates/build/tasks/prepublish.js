'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prepublish', function (callback) {
  return runSequence(
    'build',
    'test:unit',
    callback
    );
});
