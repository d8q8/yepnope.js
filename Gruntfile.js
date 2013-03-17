module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    mocha: {
      all : {
        options: {
          // mocha options
          mocha: {
            ignoreLeaks: false
          },

          // URLs passed through as options
          urls: [ 'http://localhost:' + port + '/test/all.html' ],

          // Indicates whether 'mocha.run()' should be executed in
          // 'bridge.js'
          run: true
        }
      }
    },
    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          document: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('test', ['jshint', 'mocha']);

  grunt.registerTask('default', ['jshint', 'mocha', 'uglify']);

};