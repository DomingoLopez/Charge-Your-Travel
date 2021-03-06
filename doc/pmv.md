# Productos Mínimos Viables

Teniendo en cuenta las [historias de usuario](user-stories.md) se plantean los siguientes PMV que se desarrollarán a lo largo del proyecto:

## PMV 0 - Interno: Diseño de clases del sistema. 

En el *PMV 0 - Interno* se creará la estructura de clases inicial que involucra al sistema en su conjunto, lo que nos permitirá tener presente en todo momento el modelo de datos del sistema. 

Referencia a las HU: HU1, HU2, HU3, HU4

---

## PMV 1: Subsistema de optimización de rutas.

 El primer PMV consiste en la implementación del subsistema de optimización de rutas para vehículos eléctricos, que tendrá en cuenta la carga actual del vehículo, la distancia al destino, así como los precios de las estaciones de servicio circundantes al trayecto.

 Referencia a las HU: HU1, HU2

---

## PMV 2: Subsistema de descuentos en estaciones de servicio para usuarios particulares

 El segundo PMV consiste en la implementación del subsistema de descuentos para usuarios particulares. Cada estación de servicio puede publicar los descuentos variables aplicables a los usuarios fidelizados en función de las veces que hayan recargado y durante un tiempo determinado, sirviendo como *filtro* a la hora del abono del importe total de recarga por parte de los usuarios.

 Referencia a las HU: HU3

---

 ## PMV 3: Histórico de recargas e impresiones

 El tercer PMV consiste en la implementación del subsistema de logs de recarga e impresiones de los usuarios, que será muy útil para la estaciones de servicio ya que podrán ver que tipo de usuario particular, y en consecuencia qué tipo de vehículo eléctrico reposta en sus estaciones, así como aquellos que repostan cerca pero no en sus estaciones debido a no disponer de cierto tipo de cargadores eléctricos específicos, algo que será muy útil para la toma de decisiones de la estación de servicio.

 Referencia a las HU: HU4