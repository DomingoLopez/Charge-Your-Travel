# Diagrama de clases del diseño

En la siguiente imagen podemos observar la primera versión del diagrama de clases:

![Diagrama de clases](img/diagrama-clases-v1.png)

Podemos distinguir las siguientes entidades siguiendo a grandes rasgos el [enfoque DDD](https://medium.com/@jonathanloscalzo/domain-driven-design-principios-beneficios-y-elementos-segunda-parte-337d77dc8566) :

UsuarioParticular:
- _id : identificador único del usuario
- vehiculo: Vehículo en uso del usuario
- coord_actuales: coordenadas del usuario

Vehículo:
- _id : identificador único del vehículo
- carga_actual_percent: porcentaje de carga actual del vehículo
- capacidad_total_kw: capacidad de la batería en Kw
- autonomia_actual_km: autonomía actual del vehículo en Km
- autonomia_global_km: autonomía total del vehículo en Km
- tipo_conector: Tipo de conector de carga del vehículo

EstacionServicio:
- _id: identificador único de la estación de servicio
- coord: Coordenadas de la estación de servicio
- tipo_conector []: array de conectores disponibles en la estación de servicio.
- filtro_precio: Filtro actual (descuento) a aplicar en el precio de la recarga eléctrica de vehículos.


LogImpresiones:
- _id: identificador único de la impresión
- _id_usuario: identificador del usuario al que se le ha recomendado esa estación en la ruta.
- _id_estación: identificador de la estación mostrada en la impresión.
- tipo_conector: tipo de conector de la estación mostrado en la impresión.
- timestamp: timestamp de la impresión.
- distancia_euc_estacion: distancia euclídea a la estación mostrada en la impresión. 
- tipo_impresion: tipo de la impresión. Puede ser satisfactoria si se le ha recomendado al usuario esa estación de servicio, no satisfactoria si se ha descartado por el peso que tenga el algoritmo de optimización en  (min(precio) + max(distancia)) o puede ser que se descarte la impresión por no tener ese conector disponible en la estación de servicio.


Los enumerados **TipoConector** y **TipoImpresion** podrían considerarse como **objetos de valor** ya que no disponene de identificador único. Simplemente aportan valor sobre la entidad raíz.

La clase **FiltroPrecio** también es un objeto de valor que no tiene identidad propia y no tendría sentido sin la clase *EstacionServicio*. En conjunto, las clases EstacionServicio y FiltroPrecio podrían considerarse como un **agregado**, así como también podrían serlo las clases *UsuarioParticular* y *Vehiculo*.

FiltroPrecio:
- precio_base_kwh: precio del Kw/h en la estación del servicio.
- base_discount_percent: descuento base a aplicar por la estación de servicio en cada recarga.
- inc_discount_percent: incremento del descuento por cada recarga acumulativa.
- max_discount_percent: descuento máximo a aplicar por recargas acumulativas.
- activated: booleano que indica si se debe aplicar el filtro de precio o no.
- fecha_ini: fecha de inicio de la aplicación del descuento.
- fecha_fin: fecha fin de la aplicación del descuento.

La clase **Ruta** podría considerarse también un objeto de valor, ya que está asociada a objetos del dominio del problema sin tener una identidad propia. Aportará la ruta óptima (tras la ejecución de un algoritmo de optimización) al usuario, siendo el grueso de la lógica de negocio del sistema.

Ruta:
- distancia_total: distancia a recorrer durante la ruta para llegar al destino.
- coord_destino: coordenadas del destino
- usuario_particular: usuario que inicia la ruta.
- estaciones_servicio: estaciones de servicio posibles para la ruta.
- log_impresiones: Log de *impresiones* de estaciones de servicio que se proveen al usuario.