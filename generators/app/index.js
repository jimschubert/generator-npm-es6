/* global process */
'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');
var yosay = require('yosay');
var _ = require('lodash');

function yellowHeader(msg){
  return chalk.yellow('\n\n----'+msg+'----\n\n')
}

module.exports = yeoman.generators.Base.extend({
  
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },
  
  initializing: function () {
    this.pkg = require('../../package.json');

    this.argument('appname', { type: String, required: false });
    this.appname = this.appname || path.basename(process.cwd());
    
    this.lib = this.config.getAll().lib || {
        name: {
          original: this.appname,
          camelCase: _.camelCase(_.snakeCase(this.appname)),
          slug: _.kebabCase(this.appname)
        },
        include: {
          examples: true,
          docs: true
        },
        author: {
          email: this.user.git.email,
          name: this.user.git.name
        },
        license: 'UNLICENSED'
    };
  },
  
  prompting: function () {
    var done = this.async();

    // sup?
    this.log(yosay(
      'Welcome to the ' + chalk.red('NpmEs6') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'authorName',
        message: yellowHeader('Before we get started, let me verify your personal details:') + '\n' +
          'This information is only used to template text files where your name is used.' + '\n\n' +
          'Your full name:',
        validate: function (input) {
          if (/.+/.test(input)) {
            return true;
          }
          return 'Please enter your full name';
        },
        default: this.lib.author.name
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Your email address:',
        validate: function (input) {
          if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)) {
            return true;
          }
          return 'Please enter a valid email address';
        },
        default: this.lib.author.email
      },
      {
        type: 'input',
        name: 'libraryName',
        message: yellowHeader('Now, for some project details:') + '\nLibrary name:',
        validate: function (input) {
          if (/.+/.test(input)) {
            return true;
          }
          return 'Please enter a library name';
        },
        default: this.lib.name.original
      },
      {
      type: 'confirm',
      name: 'includeExamples',
      message: 'Would you like to include a directory for examples?',
      default: this.lib.include.examples
    },
    {
      type: 'confirm',
      name: 'includeDocs',
      message: 'Would you like to include a directory for docs?',
      default: this.lib.include.docs
    },
    {
       type: 'input',
       name: 'license',
       message: yellowHeader('Now, choose a license:') + '\n' +
        'Choose a valid identifier listed at https://spdx.org/licenses/\n' +
        'Dual licenses are referenced, for example, OR\'ing two identifiers: (ISC OR GPL-3.0)\n' +
        'You may also point to a license file: SEE LICENSE IN <filename>\n\n' +
        'License:',
       default: this.lib.license
    }];
    

    this.prompt(prompts, function (props) {
      var lib = {
        name: {
          original: props.libraryName,
          camelCase: _.camelCase(_.snakeCase(props.libraryName)),
          slug: _.kebabCase(props.libraryName)
        },
        include: {
          examples: props.includeExamples,
          docs: props.includeDocs
        },
        author: {
          email: props.authorEmail,
          name: props.authorName
        },
        license: props.license
      };

      this.lib = lib;
      
      this.config.set('lib', this.lib);
      
      done();
    }.bind(this));
  },

  writing: {
    createSourceFiles: function () {
      this.bulkDirectory('src', './src');
      this.bulkDirectory('.vscode', './.vscode');
      
      if(this.lib.include.examples){
        this.mkdir('examples');
      }
      
      if(this.lib.include.docs){
        this.bulkDirectory('docs', 'docs');
      }
    },
    
    createTestFiles: function () {
      this.bulkDirectory('test', 'test');
    },
    
    createBuildFiles: function(){
      this.bulkDirectory('build', 'build');
    },

    projectfiles: function () {
      this.copy('jsconfig.json', './jsconfig.json');
      this.copy('npmignore', './.npmignore');
      this.copy('gitignore', './.gitignore');
      this.copy('gitattributes', './.gitattributes');
      this.copy('eslintrc', './.eslintrc');
      this.copy('eslintignore', './.eslintignore');
      this.copy('editorconfig', './.editorconfig');
      this.copy('gulpfile.js', './gulpfile.js');
      
      this.template('package.json', './package.json', {lib: this.lib});
      this.template('README.md', './README.md', {lib: this.lib});
    }
  },

  install: function () {
    // this.installDependencies();
    this.npmInstall();
  }
});
