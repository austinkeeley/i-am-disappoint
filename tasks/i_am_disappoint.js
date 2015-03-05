/*
 * i-am-disappoint
 * https://github.com/austinkeeley/i-am-disappoint
 *
 * Copyright (c) 2015 Austin Keeley
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    xml2js = require('xml2js');

module.exports = function(grunt) {


  /*
   *
   */
  grunt.registerMultiTask('i-am-disappoint', 'Shames your terrible builds.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      message: this.data.options['message'] || 'Faiure',
      color: this.data.options['color'] || 'red',
      position: this.data.options['position'] || 'top-right'
    });

    var shame = fs.readFileSync(__dirname + '/../static/you-disappoint-me.html', 'utf-8');

    var data = fs.readFileSync(options.testResults, 'utf-8');
    var parser = new xml2js.Parser();
    var everythingOkay = true;
    parser.parseString(data, function (err, result) {
        result.testsuites.testsuite.forEach(function(testSuite) {
          if (testSuite.$.failures > 0) {
            everythingOkay = false;
          }
        });
    });

    this.files.forEach(function(file) {
      var contents = file.src.filter(function(filepath) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
      }).map(function(filepath) {
        return grunt.file.read(filepath);
      }).join('\n');

      if (!everythingOkay) {
        // I am not angry, I am just very disappointed.
        var regex = /<!-- i-am-disappoint -->/;
        shame = grunt.template.process(shame, {data: { message: options.message,
                                                       color: options.color,
                                                       position: options.position }});

        contents = contents.replace(regex, shame);
      }

      grunt.file.write(file.dest, contents);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });

  });

};
