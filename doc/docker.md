# Elección del contenedor base

Se define el proceso seguido para la elección del contenedor base.

## Comparación de imágenes de DockerHub.

En primer lugar, y dado que el proyecto está siendo desarrollado en Typescript, lo primero que se viene a la mente es buscar *Typescript* en el buscador de DockerHub, obteniendo algunos resultados. 


![DockerHub Typescript](img/dockerhub-typescript.png)

De todos los que aparecen podría servirnos la primera, ya que es la que más descargas tiene, así como estrellas. El problema es que utiliza bower, gulp, webpack...Herramientas que no se utilizan de momento en el proyecto. 

Podría ser una buena imagen para un proyecto que vaya a *tiro hecho*, pero se necesita algo más *personalizado* para nuestro propósito. 

Para este proyecto basado en Typescript, y que hace uso de NodeJs y npm es más interesante encontrar la imagen más liviana posible, para posteriormente instalar las dependencias del proyecto a través del *package.json*.


## Herramienta container-diff

Para poder comparar distintas imágenes sin tener que probarlas podemos utilizar una sencilla herramienta como [container-diff](https://github.com/GoogleContainerTools/container-diff), que nos provee cierta información referente a la imagen.

Su uso es sencillo:

>$container-diff analyze {imagen} --type=size --type=apt --type=history

Esta herramienta nos muestra mucha información sobre la imagen que escojamos.
Vamos a comparar la anterior imagen de Typescript y algunas imágenes de linux:

- Ubuntu bionic
![Ubuntu bionic imagen docker](img/ubuntu-img-bionic.png)
- Alpine@3.14
![Alpine imagen docker](img/alpine-img-docker.png)
- NodeJS slim
![NodeJs Slim](img/node-img-docker.png)
- NodeJS Alpine
![NodeJs Alpine](img/node-alpine-img-docker.png)
- Imagen Typescript con más estrellas
![Imagen Typescript Docker](img/typescript-img-docker.png)


Como se observa la imagen de menor tamaño (5.3M) es Alpine (versión major 3.14). El *inconveniente* (que a la vez es su mayor ventaja) de Alpine es que no trae absolutamente ningún paquete instalado, siendo considerada como una de las imágenes más livianas disponibles en DockerHub. Deberíamos instalar nodejs como mínimo en el contenedor, así como las herramientas que necesite NodeJs.

Tanto Alpine como la imagen de NodeJs-alpine (que es NodeJS sobre Alpine) me parecen buena elección. En este caso **la opción más razonable sería elegir node:16.13.0-alpine, que incluye exclusivamente lo necesario para disponer de un entorno con NodeJS con la última versión lts, y es lo recomendado en la [documentación de NodeJs en DockerHub](https://hub.docker.com/_/node?tab=description). Aun así, se va a escoger alpine:3.14 dado que se han comparado ambas imagenes base en un Dockerfile real, siendo esta ultima más ligera. Se puede observar la comparativa en la siguiente sección.**

## Comparativa imagenes base. **node:16.13.0-alpine vs alpine:3.14**

Aunque en un principio se pensó en optar por node:16.13.0-alpine, finalmente he decidido probar ambas imagenes para ver si la instalación *a mano* de nodejs y npm en alpine:3.14 sería mas ligera que la que trae node:16.13.0-alpine.

Este es el resultado:

- Tamaño con node:16.13.0-alpine
![Imagen node-alpine](img/node-alpine_comp.png)

- Tamaño con alpine:3.14
![Imagen alpine](img/alpine_comp.png)

Como puede verse, utilizando prácticamente el mismo Dockerfile (En la creación de la imagen de node:16.13.0-alpine no se instala nodejs ni npm, ya viene en la imagen) observamos que la imagen de node:16.13.0-alpine no es tan ligera como la de alpine instalando nodejs y npm a través del gestor de paquetes de alpine. 

Esto se debe principalmente a que la imagen node:16.13.0-alpine instala otras dependencias y paquetes que en nuestro caso no son necesarias para el proyecto. Analizando con la herramienta **container-diff** también podemos ver el Dockerfile de node:16.13.0, en el que se instala make, python3, gpg, yarn, curl, etc.

Por tanto, para este proyecto en particular se usará **alpine:3.14**.

## Algunas prácticas interesantes

Un artículo que circula por la red y me ha parecido interesante es el [siguiente](https://medium.com/@michalozogan/how-to-build-the-smallest-docker-typescript-image-a9a84d17e6b4), donde se incita a evitar utilizar imágenes con tag *latest* ya que no estaríamos controlando actualizaciones mayores que se produzcan en el contenedor base, recomendando en cambio utilizar versiones *major*. 

[Este es otro artículo](https://testdriven.io/blog/docker-best-practices/) interesante sobre optimización de imágenes, destacando el *multistage build*, el uso de contenedores no privilegiados y buenas prácticas en general. Aunque no he usado multistage build para el Dockerfile de este Hito, [este otro articulo](https://blog.logrocket.com/reduce-docker-image-sizes-using-multi-stage-builds/) lo recomienda encarecidamente ya que se reduce considerablemente el tamaño de las imágenes creadas.

