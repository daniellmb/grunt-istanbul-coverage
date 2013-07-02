# grunt-istanbul-coverage [![Build Status](https://travis-ci.org/daniellmb/grunt-istanbul-coverage.png)](https://travis-ci.org/daniellmb/grunt-istanbul-coverage)

> A simple grunt plugin for checking aggregated coverage thresholds from istanbul coverage JSON files.

I wanted more than just insight into code coverage but a way to enforce threshold limits as well.


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
      dir: 'coverage',
      root: 'test'
    }
  }
})
```

TIP: I suggest you `clean` the coverage folder each time to speed up the checks and so you're only validating the most
recent coverage levels.


## Using with AngularJS

This snippet from a karma.config.js will output the report and JSON files into a coverage folder.

```js
coverageReporter = {
  type: 'html',
  dir: 'test/coverage'
};
```


## Setup
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-istanbul-coverage --save-dev
```

When the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-istanbul-coverage');
```


## License
Copyright (c) 2013 Daniel Lamb
Licensed under the MIT license.
