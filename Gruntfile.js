'use strict';

module.exports = function(grunt){


    //Configuración del proyecto

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        docco: {
            debug: {
            src: ['src/**/*.ts'],
            options: {
                output: 'doc/class_docs/'
            }
            }
        },
        ts: {
            build: {
                src: ["src/**/*.ts", "!node_modules/**/*.ts"],
                dest: "build/",
                options: {
                    module: 'commonjs',
                    fast: 'never',
                    //Para que no cree los archivos js.map
                    sourceMap: false
                }
            }
        },
        clean: {
            build: ['build'],
            release: ['dist/']
        }

        });
      
        /************************************************************
         * GRUNT PLUGGINS
         ************************************************************/
        // Cargamos plugin de docco para generar documentación
        grunt.loadNpmTasks('grunt-docco');
        // Cargamos plugin de Typescript para poder transpilar a JS 
        grunt.loadNpmTasks("grunt-ts");
        // Cargamos plugin de limpieza para limpiar directorios
        grunt.loadNpmTasks('grunt-contrib-clean');
      


        /************************************************************
         * GRUNT REGISTER TASK
         ************************************************************/
        grunt.registerTask("default", ["ts:build"]);



};