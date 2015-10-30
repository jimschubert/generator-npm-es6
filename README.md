# generator-npm-es6 [![Build Status](https://secure.travis-ci.org/jimschubert/generator-npm-es6.png?branch=master)](https://travis-ci.org/jimschubert/generator-npm-es6)

> [Yeoman](http://yeoman.io) generator

The `npm-es6` yeoman generator will create a project structure which allows you to write code in ES6, transpile into ES5, and publish the ES5 version on npm.

It uses gulp to build the project and mocha to run tests.

## What you need

This is a yeoman generator. Yeoman is a project templating tool. You download generators for different types of projects, then run yeoman's cli command (`yo`) with the name of the generator to enter a wizard for creating a project.

You need nodejs, npm, and yeoman installed. [Download node.js](https://nodejs.org/en/) and install. This will include npm.

Now, install yeoman.

```bash
npm install -g yo
```

If you want to learn more about yeoman, check out the [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Installation

To install generator-npm-es6 from npm, run:

```bash
npm install -g generator-npm-es6
```

Create a directory for your new library:

```bash
mkdir myapp && cd $_
```

Finally, initiate the generator:

```bash
yo npm-es6
```
Follow the prompts and answer the questions. You'll end up with a nifty structure for writing npm modules in ES6.

## License

MIT
