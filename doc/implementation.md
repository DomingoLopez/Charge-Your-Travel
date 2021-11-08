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

Dado que el proyecto está siendo desarrollado en **[Typescript](https://www.typescriptlang.org/)**, compararemos distintos frameworks de tests que sean compatibles con este lenguaje, así como distintas librerías de aserciones.


- **[Jest](https://jestjs.io/es-ES/)** : Es un framework de pruebas muy utilizado en la comunidad de desarrolladores y que incorpora su propia librería de aserciones. Dispone de un enfoque [BDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_comportamiento) (Behaviour Driven Development) a la hora de implementar los tests, lo que lo hace fácilmente comprensible y que las pruebas puedan ser escritas por partes interesadas del proyecto que no dominen tecnicismos informáticos. 

    Estrellas en github: + 37.000\
    Usado por: Facebook, Twitter, NY Times, Spotify... 

- **[Mocha](https://mochajs.org/)** : Framework de pruebas que permite la inclusión de librerías de aserciones como **[Chai](https://www.chaijs.com/api/)**. Esta librería de aserciones dispone de soporte tanto para BDD (con funciones como *expect*) como para TDD (con funciones como *assert*). Es más flexible que Jest en el sentido de que es más ligero debido a que no incorpora de base librería para aserciones, dejando al gusto del desarrollador la librería a utilizar. En cambio, necesita más configuraciones que Jest.

    Estrellas en github: + 20.900\
    Usado por: LuchBox, Tipoff, MOVILL, SocialBakers...

- **[Jasmine](https://jasmine.github.io/)** : Framework de pruebas con un enfoque claramente BDD. Dispone de su propia librería de aserciones y la sintaxis es prácticamente igual que la de Jest. 

    Estrellas en github: + 15.200\
    Usado por: Accenture, Walmart, Okta...


Tras comparar estos tres marcos de prueba y librerías de aserciones como Chai, hay que tener muy presente la comunidad de desarrolladores. En este caso se lleva la palma **Jest** debido a lo asentado que se encuentra actualmente como marco de pruebas preferente en la comunidad, lo que nos permitirá tener un buen soporte en foros, artículos y tutoriales a nuestra disposición. 

Por todo ello, se utilizará **Jest** como marco de pruebas BDD, así como su librería propia de aserciones. 


## Gestores de tareas

Tanto para construir, limpiar y pasar los tests del proyecto se utilizará un gestor de tareas que nos permita ejecutar distintos comandos de consola sin tener que recordarlos, creando para ello un archivo de con distintas directivas y etiquetas fáciles de recordar y que realizaran las distintas funciones. 

Existen distintos gestores de tareas pensados para Typescript o Javascript como **GruntJS o GulpJS**, así como *genéricos* basados en órdenes de shell como **Make**. Vamos a analizar los más utilizados:


- **[Grunt](https://gruntjs.com/)** : Gestor de tareas para nodeJS que permite una rápida configuración y el uso de multitud de **plugins** para aumentar su funcionalidad sin tener que crear las tareas a mano, destacando *[grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean)* para ordenar y limpiar directorios o *[grunt-run](https://www.npmjs.com/package/grunt-run)* para poder ejecutar comandos de shell. Dispone de un cli muy intuitivo y es de los más activos y usados por la comunidad. Las tareas se han de escribir en un archivo denominado *Gruntfile.js*. Grunt se fundamenta en en *Configuración sobre escritura de código*.

    Estrellas en github: + 12.100\
    Usado por: Adobe, JQuery, Twitter, Mozilla, Opera, Wordpress...

- **[Gulp](https://gulpjs.com/)** : Gestor de tareas para nodeJS que podría considerarse una evolución de *Grunt*. También dispone de su cli y archivo de tareas *Gulpfile.js*. Se considera que [Gulp es más rápido que Grunt debido a que el primero lleva a cabo los procesos en la memoria principal](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/), y no haciendo uso de archivos temporales como hace Grunt. Que sea más rápido es un factor importante a tener en cuenta en proyectos grandes donde el testeo del software debe ser lo más rápido posible para no interrumpir el ciclo normal del desarrollo y del equipo humano. Gulp se fundamente en *Escritura de código sobre configuración excesiva*.

    Estrellas en github: + 32.400 \
    Usado por: Rublon, Netflix, Code For America....

 - **[Make](https://www.gnu.org/software/make/)** : Es una herramienta de construcción, gestión de dependencias y tareas a partir de un archivo denominado *Makefile*, escritas en órdenes de shell. Posiblemente sea la herramienta más antigua y robusta de todas las mostradas, lo que la hace una buena elección debido a la cantidad de soporte existente y a la fácil curva de aprendizaje que tiene si somos duchos con la terminal de comandos. 


Para este proyecto se hará uso de **Grunt** debido fundamentalmente a la cantidad de soporte que hay disponible en internet, así como el fácil uso de sus *plugins* a través del *grunt-cli*. Si el proyecto fuera de una mayor envergadura cabría la posibilidad de escoger Gulp por su mayor rapidez o incluso Make por su mayor flexibilidad. 

## Gestores de dependencias

En este sentido hay poca discusión dado que el proyecto se fundamenta en el lenguaje Typescript, que es Javascript tipado, desarrollado y mantenido por Microsoft. Por tanto, para ejecutar Javascript del lado del servidor utilizaremos NodeJs, cuyo gestor de dependencias más usado es **[npm](https://www.npmjs.com/)**.

Existen otros gestores de dependencias como **[yarn](https://classic.yarnpkg.com/lang/en/)**, con aprox. +40.000 estrellas en github que incrementa su popularidad día a día. A pesar de esto y debido al conocimiento previo de npm se hará uso de este.
