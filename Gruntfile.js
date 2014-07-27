/*

TO DO
==============
Implement CSSmin instead of Compass compressed
Rename produciton.js and remove uncompreseed version

*/

'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),


       // Watch + Livereload
	watch: {
	  sass: {
	    files: ['sass/**/*.scss'],
	    tasks: ['compass:dev']
	},

	livereload: {
	  files: ['*.html', 'sass/**/*.scss', 'js/*.js'],
	    options: {
	      livereload: true
	    }
	  },
	},

      // Compass and SCSS
      compass: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          imagesDir: 'images',
        },
        dist: {
          options: {
            outputStyle: 'compressed'
          }
        },
        dev: {
          options: {
            outputStyle: 'expanded'
          }
        }
      },

    

    });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-compass');




   // Default task
    grunt.registerTask('default', [
      'compass:dev', 'watch'
   ]);

};