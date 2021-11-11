import { FiltroPrecio } from './filtro-precio';
import { Coordenadas } from './coordenadas';
import { TipoConector } from './enum/tipo-conector';


export class EstacionServicio{

    _id: string;
    coord: Coordenadas;
    filtro_precio: FiltroPrecio;
    tipo_conector: TipoConector[];

    constructor(
        _id: string,
        coord: Coordenadas,
        filtro_precio: FiltroPrecio,
        tipo_conector: TipoConector[]) 
    {
        this._id = _id;
        this.coord = coord;
        this.filtro_precio = filtro_precio;
        this.tipo_conector = tipo_conector;
    }


    /**
     * Método para comprobar si la estación de servicio es alcanzable
     * por el vehículo dad su autonomía actual
     * 
     * @param autonomia_vehiculo autonomía del vehículo
     * @param coordenadas coordenadas del vehículo
     */
    public isReachable(autonomia_vehiculo: number, coordenadas: Coordenadas): Boolean {
        return this.coord.calculaDistancia(coordenadas) <= autonomia_vehiculo ? true : false;
    }




    // /**
    //  * Método que llama al Repositorio de datos para obtener las recargas de un usuario en la estación durante las
    //  * fechas de activación del filtro si está en rango y si está activo.
    //  * 
    //  * Se implementará una vez se definan los repositorios de datos
    //  * 
    //  * @param _id_usuario identificador del usuario
    //  */
    // public getTotalRecargasPorUsuario(_id_usuario: string): number{
    //     throw new Error("Not Implemented yet");
    // }





    /**
     * Obtiene las estaciones de servicio más cercanas al usuario que no sobrepasen el límite 
     * de autonomía del vehículo y que dispongan del tipo de conector indicado por el usuario.
     * Además, deben estar ordenadas en función del precio_kw*distancia a la estación descendente
     * @param _id_usuario: identificador del usuario
     * @param tipo_conector: identificador del usuario
     * @param coordenadas: Coordenadas del usuario
     * @param autonomia_vehiculo: Autonomía actual en km del vehículo
     * @param estaciones: Array de estaciones a analizar
     * @returns EstacionServicio[], array de estaciones filtradas y ordenadas
     */
    public static getEstacionesPrioritarias(
        _id_usuario: string, 
        tipo_conector: TipoConector, 
        coordenadas: Coordenadas, 
        autonomia_vehiculo: number, 
        estaciones: EstacionServicio []
    ): EstacionServicio[]
    {
        //Filtramos para quedarnos con las estaciones que tienen el tipo de conector requerido
        let estaciones_filtradas : EstacionServicio [] = estaciones.filter(estacion => estacion.tipo_conector.includes(tipo_conector));
        estaciones_filtradas = estaciones_filtradas.filter(estacion => estacion.isReachable(autonomia_vehiculo,coordenadas));

        estaciones_filtradas = estaciones_filtradas.sort((estacion1,estacion2)=>{
            //Cálculo para estación 1
            //let total_recargas_por_usuario_est1 = estacion1.getTotalRecargasPorUsuario(_id_usuario)|0;
            const total_recargas_por_usuario_est1 = 0;
            let precio_total_est1 = estacion1.filtro_precio.applyFilters(tipo_conector,total_recargas_por_usuario_est1);
            let distance_est1 = estacion1.coord.calculaDistancia(coordenadas);

            //Cálculo para estacion 2
            //let total_recargas_por_usuario_est2 = estacion1.getTotalRecargasPorUsuario(_id_usuario)|0;
            const total_recargas_por_usuario_est2 = 0;
            let precio_total_est2 = estacion2.filtro_precio.applyFilters(tipo_conector,total_recargas_por_usuario_est2);
            let distance_est2 = estacion2.coord.calculaDistancia(coordenadas);

            
            return precio_total_est1*distance_est1 < precio_total_est2*distance_est2 ? -1 : 1;
        });

        return estaciones_filtradas;


    }

    

}