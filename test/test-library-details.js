'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var fs = require('fs');

describe('npm_es6:app with custom library details', function () {
  var authorName = "ABCD jhaskdjfhaskdjhf";
  var authorEmail = "me@example.com";
  var license = "MIT";
  var libraryName = "My Library Name";
  var libraryNamePackage = 'my-library-name';

  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        authorName: authorName,
        authorEmail: authorEmail,
        license: license,
        libraryName: libraryName
      })
      .on('end', done);
  });

  it('templates user details', function () {
    assert.file([
      'README.md',
      'package.json'
    ]);
    assert.fileContent('package.json', new RegExp('"name": "' + authorName + '"', 'g'));
    assert.fileContent('package.json', new RegExp('"email": "' + authorEmail + '"', 'g'));
    assert.fileContent('README.md', new RegExp('## License\n\n' + license, 'g'));
  });
  
  it('configures the library name', function(){
    assert.file([
      'README.md',
      'package.json'
    ]);
    assert.fileContent('package.json', new RegExp('"name": "' + libraryNamePackage + '"', 'g'));
    assert.fileContent('README.md', new RegExp('# ' + libraryName, 'g'));
  });
});
