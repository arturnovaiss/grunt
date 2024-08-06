module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Configuração do LESS
      less: {
        development: {
          files: {
            'dist/styles.css': 'src/styles.less' // Saída : Entrada
          }
        }
      },
  
      // Configuração do Uglify
      uglify: {
        build: {
          files: {
            'dist/scripts.min.js': ['src/scripts.js'] // Saída : Entrada
          }
        }
      }
    });
  
    // Carregar os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Registrar tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };
  