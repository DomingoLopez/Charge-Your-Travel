# Historias de Usuario

Esta sección describe las historias de usuario más destacables del sistema propuesto. No se incluyen historias de usuario cuya lógica de negocio implícita sea trivial (buscar y mostrar), como puede ser la autenticación y registro de usuarios o aquellas que implementen *querys* sencillas de *buscar y mostrar*. 

## Roles

La identificación de roles en el sistema es muy sencilla. Simplemente tenemos:

- **Usuarios particulares**: Usuarios que disponen de vehículo eléctrico propio y necesitan minimizar costes de recarga de su vehículo, tanto para trayectos largos como para el día a día.

- **Estaciones de servicio**: Hacen referencia *administrador*/*dueño* de la estación de servicio, pudiendo categorizarlo como un usuario a la hora de describir las historias de usuario. Desean ofertar sus precios a los usuarios de vehículos eléctricos debido a la cantidad de puntos de recarga actuales, así como fidelizar a estos clientes.

---

## HU1

Como **usuario particular**, dado que necesito recargar mi coche eléctrico múltiples veces a la semana, quiero conocer las estaciones de servicio más cercanas a mi posición **gps** con el precio más bajo en el momento, teniendo en cuenta el **nivel de batería actual** de mi vehículo.

### Descripción 
Necesito conocer las estaciones de servicio más cercanas a mi posición que dispongan de cargadores eléctricos sin que el coche me deje *tirado*, intentando minimizar el coste que tendrá la recarga.


### Criterios de aceptación

- 
---
## HU2

Como **usuario particular**, dado que necesito realizar múltiples viajes a la semana con mi coche eléctrico, quiero saber la ruta más óptima de viaje hacia mi destino teniendo en cuenta las estaciones de servicio con el precio más bajo durante el trayecto, así como la distancia a las mismas y el nivel de batería actual de mi vehículo, encontrando la ruta óptima en mínima distincia recorrida y máximo ahorro. 

### Descripción 
Al realizar trayectos continuos con coche eléctrico y sabiendo que los precios de las estaciones de servicio cambian continuamente necesito minimizar costes de recarga en desplazamientos largos. 


### Criterios de aceptación

- 

---
## HU3

Como **estación de servicio**, dado que necesito ser competitivo, quiero ofrecer descuentos automáticos variables a aquellos usuarios particulares que más recarguen en la estación durante un período de tiempo concreto. 

### Descripción 
Necesito fidelizar clientes a través de un sistema de descuentos para aquellos que recargan asiduamente en mi estación de servicio. Ejemplo: Quisiera poder ofetar un 5% de descuento en la primera recarga y que esa cantidad se incremente un 3% por cada recarga adicional hasta un máximo de un 20% durante un periodo de tiempo concreto. 


### Criterios de aceptación

- 

---
## HU4

Como **estación de servicio**, dado que existen multitud de tipos de dispensadores eléctricos en el mercado, quiero saber cuales son los más usados por los **usuarios particulares** del sistema, así como los más usados por los usuarios particulares que repostan cerca de mi estación y *que no acaban repostando* en mi estación de servicio.

### Descripción 
Quiero saber cuales son los tipos de dispensadores eléctricos predominantes de los usuarios del sistema, con lo que podré incorporar estos dispensadores en el futuro si observo tendencia de uso a la alza en alguno de ellos. 


### Criterios de aceptación
- 


