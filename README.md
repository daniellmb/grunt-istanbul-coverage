# grunt-istanbul-coverage [![Build Status](https://travis-ci.org/daniellmb/grunt-istanbul-coverage.png)](https://travis-ci.org/daniellmb/grunt-istanbul-coverage)

> A simple grunt plugin for checking coverage thresholds from istanbul coverage objects.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-istanbul-coverage --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-istanbul-coverage');
```

## The "coverage" task

### Overview
In your project's Gruntfile, add a section named `coverage` to the data object passed into `grunt.initConfig()`.
Thresholds, when specified as a positive number are taken to be the minimum percentage required.
When a threshold is specified as a negative number it represents the maximum number of uncovered entities allowed.
For example, `'statements': 90` means the minimum statement coverage is 90%. While `'statements': -10` implies that no
more than 10 uncovered statements are allowed,

```js
grunt.initConfig({
  coverage: {
    options: {
      thresholds: {
        'statements': 90,
        'branches': 90,
        'lines': 90,
        'functions': 90
      },
      dir: 'coverage'
      root: 'test',
    }
  }
})
```

## License
Copyright (c) 2013 Daniel Lamb
Licensed under the MIT license.