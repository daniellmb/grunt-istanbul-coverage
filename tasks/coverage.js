/*
 * grunt-istanbul-coverage
 * https://github.com/daniellmb/grunt-istanbul-coverage
 *
 * Copyright (c) 2013 Daniel Lamb
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var helper = require('./helpers').init(grunt);

    grunt.registerTask('coverage', 'check coverage thresholds', function () {
        //set default options
        var options = this.options({
            thresholds: {
                'statements': 90,
                'branches': 90,
                'lines': 90,
                'functions': 90
            },
            dir: null,
            root: ''
        });

        //check code coverage
        helper.checkCoverage(options, this.async());
    });
};