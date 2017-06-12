'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'js/main.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: 'checkstyle',
        reporterOutput: 'build/report.xml'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      build: ['build']
    },

    uglify: {
      js: {
        src: 'js/*.js',
        dest: 'build/compiled.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'build/compiled.css': ['css/jquery-ui.min.css', 'css/main.css']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // By default, lint and run all tests.
  grunt.registerTask('build', [
    'clean:build',
    'jshint:all',
    'uglify:js',
    'cssmin:target'
    ]);

};