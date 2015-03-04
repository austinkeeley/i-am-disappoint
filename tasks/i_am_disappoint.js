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

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('i_am_disappoint', 'Shames your terrible builds.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
    
    var shame = fs.readFileSync('static/you-disappoint-me.html', 'utf-8');
    
    var data = fs.readFileSync(options.testResults, 'utf-8');
    var parser = new xml2js.Parser();
    var everythingOkay = true;
    parser.parseString(data, function (err, result) {
        result.testsuites.testsuite.forEach(function(testSuite) {
          if (testSuite.$.failures > 0) {
            everythingOkay = false;
          }
        });
        console.log('Done');
    });
    
    this.files.forEach(function(file) {
      var contents = file.src.filter(function(filepath) {
      // Remove nonexistent files (it's up to you to filter or warn here).
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
      }).map(function(filepath) {
        // Read and return the file's source.
        return grunt.file.read(filepath);
      }).join('\n');
      
      if (!everythingOkay) {
        var regex = /<!-- i-am-disappoint -->/;
        contents = contents.replace(regex, shame);
      }
    
      // Write joined contents to destination filepath.
      grunt.file.write(file.dest, contents);
      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
    
    

    // Iterate over all specified file groups.
/*    this.files.forEach(function(f) {
      var html = fs.readFileSync(f, 'utf-8');
      var regex = /<!-- i-am-disappoint -->/;
      html = html.replace(regex, shame);
      console.log(html);
    });
  */  
    
  });

};
