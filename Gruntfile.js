module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-prettier');

  grunt.registerTask('default', ['clean', 'prettier', 'eslint', 'mochaTest']);
  grunt.registerTask('dev', ['clean', 'prettier', 'eslint', 'watch']);
  grunt.registerTask('build', ['clean', 'prettier', 'eslint']);

  // noinspection JSUnresolvedFunction
  grunt.initConfig({
    prettier: {
      files: {
        src: [
          'src/**/*.js',
          'test/**/*.js'
        ]
      }
    },
    eslint: {
      options: {
        overrideConfigFile: '.eslintrc',
        fix: true
      },
      target: [
        'src/**/*.js',
        'test/**/*.js',
      ]
    },
    clean: [
      'dist'
    ],
    watch: {
      scripts: {
        files: [
          'src/**/*.js',
          'test/**/*.js'
        ],
        tasks: ['eslint']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: [
            'test/bootstrap.js' // Example
          ],
          clearRequireCache: true
        },
        src: [
          'test/**/*.test.js'
        ]
      },
    },

    jsdoc : {
      dist : {
        src: ['index.js', 'lib/**/*.js', 'README.md'],
        jsdoc: './node_modules/grunt-jsdoc/node_modules/jsdoc/jsdoc',
        options: {
          destination: 'doc',
          configure: './conf/jsdoc.conf.json',
          template: './node_modules/grunt-jsdoc/node_modules/ink-docstrap/template'
        }
      }
    }
  });
};
