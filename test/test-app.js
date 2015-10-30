'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var fs = require('fs');

describe('npm_es6:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ includeDocs: true, includeExamples: false })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'README.md',
      'package.json',
      '.npmignore',
      'jsconfig.json',
      'gulpfile.js',
      '.gitignore',
      '.gitattributes',
      '.eslintrc',
      '.eslintignore',
      '.editorconfig',
      'test/unit/app.test.js',
      'src/app.js',
      'src/index.js',
      'docs/GettingStarted.md',
      'build/args.js',
      'build/paths.js',
      'build/tasks/watch.js',
      'build/tasks/test.js',
      'build/tasks/prepare-release.js',
      'build/tasks/lint.js',
      'build/tasks/help.js',
      'build/tasks/prepublish.js',
      'build/tasks/default.js',
      'build/tasks/clean.js',
      'build/tasks/build.js',
      '.vscode/settings.json'
    ]);
  });
});
