module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
              files: {
                'styles/global.css': 'styles/global.scss'
              }
            }
        },
        watch: {
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

    grunt.registerTask('default', ['sass', 'watch']);
};