# Implementación

Se definen a continuación las metodologías y herramientas que se utilizarán durante los ciclos de desarrollo.

## Desarrollo basado en pruebas

Para la implementación de los distintos componentes del sistema utilizaremos en enfoque [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) (Test Driven Development), en el que escribiremos las pruebas de cada uno de los componentes del sistema de forma aislada y posteriormente escribiremos el código de dichos componentes para verificar si pasamos los tests. 

En general, la metodología TDD implica pasar por los siguientes estados en el marco de pruebas:
1. Escribir los tests
2. Verificar que los tests fallan
3. Escribir el código necesario para que se pasen los tests
4. Verificar que los tests pasan 
5. Refactorizar el código escrito

Como framework de tests se utilizará *[Jest](https://jestjs.io/es-ES/)*, que dispone de un enfoque [BDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_comportamiento) (Behaviour Driven Development) a la hora de implementar los tests.

## Gestores de tareas

Tanto para construir, limpiar y pasar los tests del proyecto se utilizará un gestor de tareas que nos permita ejecutar distintos comandos de consola sin tener que recordarlos, creando para ello un archivo de con distintas directivas y etiquetas fáciles de recordar y que realizaran las distintas funciones. 

Existen distintos gestores de tareas, como Make, GruntJs, GulpJs, etc. En este caso se ha escogido *[Grunt](https://gruntjs.com/)* dado que está pensado para escribir sus archivos de configuración y lanzamiento de órdenes en Javascript o Typescript, por lo que la curva de aprendizje del Task Runner será menor dado que ya utilizamos Typescript como lenguage principal del proyecto. 

Además, Grunt es más antiguo que otros task runners similares como Gulp (aunque no tanto como Make) por lo que existe una comunidad más amplia que lo utiliza y será más sencillo encontrar soluciones a posibles problemas que podamos encontrar en su configuración y uso. 

Para proyectos más grandes sería una buena elección utilizar Make o incluso Gulp, dado que este último es más rápido que Grunt, **algo sumamente importante a la hora de pasar tests y tareas automatizadas** : [Gulp lleva a cabo los procesos en la memoria principal](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/). 

Grunt se fundamenta en *Configuración sobre escritura de código* mientras que Gulp es justo lo contrario, teniendo ambos amantes y detractores. En mi opinión cualquiera de los dos es válido para este tipo de proyecto.

## Gestores de dependencias

En este sentido hay poca discusión dado que el proyecto se fundamenta en el lenguaje [Typescript](https://www.typescriptlang.org/), que es Javascript tipado, desarrollado y mantenido por Microsoft. Por tanto, para ejecutar Javascript del lado del servidor utilizaremos NodeJs, cuyo gestor de dependencias más usado es [npm](https://www.npmjs.com/).
