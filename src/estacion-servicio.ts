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
     * Método para saber si se dispone de ese tipo de conector en la estación 
     * de servicio.
     * @param tipoConector: tipo de conector a consultar
     * @returns true si se dispone de ese conector, false en caso contrario
     */
    public hasConnector(tipoConector: TipoConector): boolean{
        return this.tipo_conector.filter( (conector:TipoConector) => conector == tipoConector).length > 0 ? true : false;
    }

    /**
     * Obtiene el precio final del kwh de la estación en función de 
     * las veces que haya recargado un usuario y el tipo de conector.
     * @param tipo_conector: tipo de conector que necesita el usuario para recargar
     * @param _id_estacion: identificador de la estación de servicio
     * @param _id_usuario: identificador del usuario
     * @returns precio_final: -1 si no está activo el filtro o fuera de rango de fechas, precio_final si está activo
     */
    public getPriceFilteredByUser(tipo_conector: TipoConector,_id_usuario: string, _id_estacion: string): number {
       return this.filtro_precio.applyFilters(tipo_conector,_id_usuario,_id_estacion);
    }
  
    /**
     * Obtiene distancia a la estación
     * @param coordenadas_origen: coordenadas
     * @returns distancia a la estación
     */
    public getDistanceToStation(coordenadas_origen:  Coordenadas): number{
        return this.coord.calculaDistancia(coordenadas_origen);
    }

    

}