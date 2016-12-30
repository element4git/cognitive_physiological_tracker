module.exports = function(grunt) {

    grunt.config.set('babel', {
      dev: {
        files: [{
          expand: true,
          cwd: 'assets/vendor/',
          src: ['**/*.js'],
          dest: '.tmp/public/vendor/',
          ext: '.js'
        }]
      }
    });

    grunt.loadNpmTasks('grunt-babel');
};