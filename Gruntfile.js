module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: '320w',
            width: 320,
            quality: 50
          },
          {
            name: '480w',
            width: 480,
            quality: 50
          },
          {
            name: '800w',
            width: 800,
            quality: 50
          }
        ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
