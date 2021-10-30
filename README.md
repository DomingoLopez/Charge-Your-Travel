# Charge Your Travel
Sistema de recomendación y rutas óptimas de viaje en vehículo elétrico a través de estaciones de servicio que permitan este tipo de recarga. 


Estado actual: :construction: En construcción.

## Descripción del problema

:zap:*Charge Your Travel*:zap: podría considerarse una red social para particulares de vehículos eléctricos y estaciones de servicio que disponen de dispensadores de recarga eléctricos. A día de hoy multitud de estaciones de servicio disponen de este tipo de dispensadores, cada una con un precio distinto para la recarga en función de múltiples factores como el contrato con la comercializadora eléctrica, el tipo de conector eléctrico para el vehículo, dispensadores de carga rápida o no, etc. 

Los particulares dispondrían de un sistema en el que comparar distintas estaciones de servicio en las que recargar, así como planificar sus viajes con un sistema de recomendación de la ruta óptima para llegar a su destino teniendo en cuenta la autonomía del vehículo eléctrico en ese momento, así como los precios de las distintas estaciones de servicio que estén suscritas a esta red. 

Este sistema permitiría a las estaciones de servicio anunciarse y exponer sus precios de recarga, así como ofertar servicios al usuario particular del vehículo como sistema de puntos y descuentos. Además, podrán comprobar los usuarios que utilizan el sistema y que acaban repostando en sus estaciones. La recarga eléctrica del vehículo implica estar un cierto tiempo en la estación de servicio, que puede derivar en ventas colaterales de otros servicios físicos que ofrezca la estación de servicio.

## Planificación 

Se propone la siguiente planificación para el desarrollo del proyecto, en la que se han identificado las [historias de usuario](doc/user-stories.md) y los [PMV](doc/pmv.md), así como los *roles* de los distintos usuarios del sistema.

Dado que la finalidad es la de obtener un producto viable y de calidad que haya superado distintos tests así como su posterior despliegue en la nube, se han identificado los PMV que he considerado más relevantes y con más cantidad de lógica de negocio, quedando la planificación tal que así:

|              |    PMV 1   |    PMV 2   |    PMV 3   |    PMV 4   |
|--------------|:----------:|:----------:|:----------:|:----------:|
| Fecha Inicio | 11/10/2021 | 19/10/2021 | 01/11/2021 | 15/11/2021 |
| Fecha Fin    | 18/10/2021 | 31/10/2021 | 14/11/2021 | 28/11/2021 |


## Diseño

A raíz de las HU se propone la primera versión del [Diagrama de clases del sistema](doc/class-diagram.md), el cual podrá evolucionar en función de nuevos requerimientos o ajustes en la funcionalidad, siempre con el objetivo de disponer de un diseño sólido en todas las etapas del proyecto. Además, se identifican las **entidades**, **objetos de valor** y **agregados** siguiendo a muy grandes rasgos el enfoque [DDD](https://medium.com/@jonathanloscalzo/domain-driven-design-principios-beneficios-y-elementos-segunda-parte-337d77dc8566).


## Implementación

### Desarrollo basado en pruebas

Para la implementación de los distintos componentes del sistema utilizaremos en enfoque [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) (Test Driven Development), en el que escribiremos las pruebas de cada uno de los componentes del sistema de forma aislada y posteriormente escribiremos el código de dichos componentes para verificar si pasamos los tests. 

En general, la metodología TDD implica pasar por los siguientes estados en el marco de pruebas:
1. Escribir los tests
2. Verificar que los tests fallan
3. Escribir el código necesario para que se pasen los tests
4. Verificar que los tests pasan 
5. Refactorizar el código escrito


## Documentación Adicional

* [Configuración del entorno: Git y Github.](doc/additional_doc/configuracion-entorno.md)

    > Configuración de par de claves pública y privada para conexión ssh a github. Configuración de cuenta de github.


## Licencia

* [Licencia](LICENSE)