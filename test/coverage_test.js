'use strict';

var grunt = require('grunt');
var helper = require('../tasks/helpers').init(grunt, true);
var options;

exports.istanbul_coverage = {
    setUp: function (done) {
        //reset options
        options = {
            thresholds: {},
            root: './test/',
            dir: 'fixtures'
        };
        done();
    },
    'should throw error when root option is not set': function (test) {
        test.expect(1);

        //remove root option
        options.root = undefined;
        test.throws(function () {
            helper.checkCoverage(options);
        });
        test.done();
    },
    'should throw error when dir option is not set': function (test) {
        test.expect(1);

        //remove dir option
        options.dir = undefined;
        test.throws(function () {
            helper.checkCoverage(options);
        });
        test.done();
    },
    'should throw error when coverage folder is not found': function (test) {
        test.expect(1);

        //set invalid path
        options.dir = 'foo';
        test.throws(function () {
            helper.checkCoverage(options);
        });
        test.done();
    },
    'should throw error when there are no coverage json files': function (test) {
        test.expect(1);

        //set to folder with no json files
        options.dir = '../tasks';
        test.throws(function () {
            helper.checkCoverage(options);
        });
        test.done();
    },
    'should fail on inadequate statement coverage': function (test) {
        test.expect(1);

        //set failing threshold
        options.thresholds.statements = 72;

        helper.checkCoverage(options, function (passed) {
            test.ok(!passed);
            test.done();
        });
    },
    'should fail on inadequate branch coverage': function (test) {
        test.expect(1);

        //set failing threshold
        options.thresholds.branches = 72;

        helper.checkCoverage(options, function (passed) {
            test.ok(!passed);
            test.done();
        });
    },
    'should fail on inadequate function coverage': function (test) {
        test.expect(1);

        //set failing threshold
        options.thresholds.functions = 72;

        helper.checkCoverage(options, function (passed) {
            test.ok(!passed);
            test.done();
        });
    },
    'should fail on inadequate line coverage': function (test) {
        test.expect(1);

        //set failing threshold
        options.thresholds.lines = 72;

        helper.checkCoverage(options, function (passed) {
            test.ok(!passed);
            test.done();
        });
    },
    'should fail with reasons when threshold violated with negative value': function (test) {
        test.expect(1);

        //set failing threshold
        options.thresholds.statements = -3;

        helper.checkCoverage(options, function (passed) {
            test.ok(!passed);
            test.done();
        });
    },
    'should pass when statement coverage is within threshold limit': function (test) {
        test.expect(1);

        //set passing threshold
        options.thresholds.statements = 60;

        helper.checkCoverage(options, function (passed) {
            test.ok(passed);
            test.done();
        });
    },
    'should pass when function coverage is within threshold limit': function (test) {
        test.expect(1);

        //set passing threshold
        options.thresholds.functions = 50;

        helper.checkCoverage(options, function (passed) {
            test.ok(passed);
            test.done();
        });
    },
    'should pass when branch coverage is within threshold limit': function (test) {
        test.expect(1);

        //set passing threshold
        options.thresholds.branches = 50;

        helper.checkCoverage(options, function (passed) {
            test.ok(passed);
            test.done();
        });
    },
    'should pass when line coverage is within threshold limit': function (test) {
        test.expect(1);

        //set passing threshold
        options.thresholds.lines = 60;

        helper.checkCoverage(options, function (passed) {
            test.ok(passed);
            test.done();
        });
    },
    'should console.log out the coverage summary if report is true': function (test) {
        var helper = require('../tasks/helpers').init(grunt, false);
        var consoleLogs = [];
        var cl = console.log;
        console.log = function (msg) {
            consoleLogs.push(msg);
        };

        test.expect(1);

        //set passing threshold
        options.thresholds.lines = 60;
        options.report = true;

        helper.checkCoverage(options, function () {
            consoleLogs.forEach(function(msg) {
                if (msg.indexOf('Coverage summary') > 0) {
                    console.log = cl;
                    test.ok(msg.indexOf('Coverage summary') > 0);
                    test.done();
                }
            });
        });
    },
    'should not console.log out the coverage summary if report is true': function (test) {
        var helper = require('../tasks/helpers').init(grunt, false);
        var cl = console.log;
        var consoleLogs = [];
        console.log = function (msg) {
            consoleLogs.push(msg);
        };

        test.expect(1);

        //set passing threshold
        options.thresholds.lines = 60;
        options.report = false;

        helper.checkCoverage(options, function () {
            test.equal(consoleLogs.length, 0);
            console.log = cl;
            test.done();
        });
    }
};
