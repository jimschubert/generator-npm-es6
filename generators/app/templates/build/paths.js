/* global __dirname */
'use strict';
var path = require('path');

const projectRoot = path.normalize(__dirname + '/../');
const src = projectRoot + 'src/';
const test = projectRoot + 'test/';
const outputRoot = projectRoot + 'dist/';

module.exports = {
  root: projectRoot,
  dist: outputRoot,
  source: src,
  doc: projectRoot + 'docs/',
  sourceJavascript: src + '**/*.js',
  unitTestLocation: test + 'unit/',
  // e2eTestLocation: test + 'e2e/'
};