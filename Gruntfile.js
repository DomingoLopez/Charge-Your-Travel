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
        },
        run:{
            options:{

            },
            test:{
                exec: 'npm test'
            },
            install:{
                exec: 'npm install'
            }
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
        // Cargamos plugin para ejecutar comandos de shell
        grunt.loadNpmTasks('grunt-run');
      


        /************************************************************
         * GRUNT REGISTER TASK
         ************************************************************/
        grunt.registerTask("default", ["ts:build"]);



};