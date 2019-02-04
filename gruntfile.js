module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
              options: {
                removeComments: true,
                collapseWhitespace: true
              },
              files: {
                'index.html': 'index.html',
              }
            }
        },
        sass: {
            dist: {
              files: {
                'styles/global.css': 'styles/global.scss'
              }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['styles/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            } 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['sass', 'htmlmin', 'watch']);
};