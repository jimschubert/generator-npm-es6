'use strict';

// Register babel to compile all javascript.
// NOTE: By default all requires to node_modules will be ignored.
require('babel/register');
require('require-dir')('build/tasks');
