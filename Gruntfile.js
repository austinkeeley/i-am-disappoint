/*
 * i-am-disappoint
 * https://github.com/austinkeeley/i-am-disappoint
 *
 * Copyright (c) 2015 Austin Keeley
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    'i-am-disappoint': {
      example: {
        options: {
            testResults: 'test/fixtures/test_results.xml',
            message: 'so fail.'
        },
        files: { 'tmp/index.html': ['test/fixtures/index.html'] }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');


  // By default, lint and run all tests.
  grunt.registerTask('example', ['i-am-disappoint:example']);



};
