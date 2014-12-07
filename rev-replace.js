/*
 *  Plugin to replace assets urls based on generated manifest file. As it sounds like, it needs to be used after gulp-rev created the rev-manifest.json
 *
 *  Written by jiyinyiyong [https://github.com/mvc-works]
 *  Git hub path: https://github.com/mvc-works/gulp-rev-manifest-replace
 *
 *
 *  Some modifications by : Arun
 *
 *  Problem : path.relative uses '\' as path separator. The plugin did not work as is in windows.
 *  Fix: we dnt have to use path.relative for our requirement
 *  Simplifications : We dont need options.path / options.cdnPrefix
 *  
 *
 */

var gutil = require('gulp-util');
var path = require('path');
var through = require('through2');


function chars(str) {
    return "\x1B[34m" + str + "\x1B[39m";    //for color display
}

var plugin = function (options) {
    var options = options || {};
    var verbose = options.verbose || false;

    if (options.manifest == undefined) {
        throw 'options.manifest is required';
    }

    var stream = through.obj(function (file, enc, callback) {
        var outfile = file.clone();
        
        var contents = String(outfile.contents);
        
        var _ref = options.manifest;
        
        var parts, wanted, fullpath;
        for (fullpath in options.manifest) {      
        
            wanted = _ref[fullpath];
            short = fullpath;

            parts = contents.split(short);

            if (parts.length > 1 && verbose) {
                var logPath = file.path;
                gutil.log("Rev replacing "+ chars(short) +" to "+ chars(wanted) + " in " + chars(logPath));
            }
            contents = parts.join(wanted);
        }
        outfile.contents = new Buffer(contents);
        this.push(outfile);
        return callback();
    });
    return stream;

};
module.exports = plugin;    ///gulp will call plugin()