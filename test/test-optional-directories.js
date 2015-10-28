'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var fs = require('fs');

describe('npm_es6:app with optional directories declined', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        includeDocs: false,
        includeExamples: false
      })
      .on('end', done);
  });

  it('should not create directories', function () {
    assert.noFile([
      'examples',
      'docs/GettingStarted.md'
    ]);
  });
});
