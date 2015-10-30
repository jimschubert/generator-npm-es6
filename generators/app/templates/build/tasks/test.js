'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var paths = require('../paths');

gulp.task('test:unit', function () {
    return gulp.src(paths.unitTestLocation + '**/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('test', ['test:unit']);
