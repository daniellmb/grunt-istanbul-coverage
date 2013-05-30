exports.init = function (grunt, silent) {
    'use strict';

    var libPath = 'istanbul/lib/',
        Command = require(libPath + 'command');

    require(libPath + 'register-plugins');

    function convertArg(options, key) {
        return '--' + key + '=' + options[key];
    }

    //convert option hash to argument string
    function convertCmdArgs(options) {
        //flatten down the options obj
        var result = Object.keys(options.thresholds).map(function (key) {
            return convertArg(options.thresholds, key);
        });
        delete options.thresholds;
        return result.concat(Object.keys(options).map(function (key) {
            if (key !== 'thresholds') {
                return convertArg(options, key);
            }
        }));
    }

    //make sure we have the required options
    function assertOptions(options, reg) {
        reg.forEach(function (key) {
            var opt = options[key];
            if (opt === null || opt === undefined) {
                throw new Error('"' + key + '" option is required.');
            }
        });
    }

    function runCommand(command, args, callback) {
        //create command
        var cmd = Command.create(command);
        //run command
        cmd.run(args, function (err) {
            var passed = false;
            //check result
            if (err) {
                if (!silent) { grunt.fail.warn(err); }
            } else {
                passed = true;
                if (!silent) { grunt.log.ok('Coverage is over the minimum thresholds'); }
            }
            callback(passed);
        });
    }

    return {
        checkCoverage: function (options, done) {
            //check to make sure we have what we need
            assertOptions(options, ['thresholds', 'root', 'dir']);

            //get command args from options
            var cmdArgs = convertCmdArgs(options);

            //run istanbul check coverage command
            runCommand('check-coverage', cmdArgs, done);
        }
    };
};