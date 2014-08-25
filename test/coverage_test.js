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
    }
};
