'use strict';
var gulp = require('gulp');

gulp.task('prepublish', ['build','test:unit']);
