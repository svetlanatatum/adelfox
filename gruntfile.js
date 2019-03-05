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
                'build/index.html': 'dev/index.html',
              }
            }
        },
        sass: {
            dist: {
              files: {
                'build/styles/global.css': 'dev/styles/global.scss'
              }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['dev/styles/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            htmlmin: {
                files: ['dev/*.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                }
            },
            imagemin: {
                files: ['**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/assets',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/assets'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass', 'htmlmin', 'imagemin', 'watch']);
};