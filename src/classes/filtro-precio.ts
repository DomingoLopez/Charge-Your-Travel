import { TipoConector } from './enum/tipo-conector';


export class FiltroPrecio{

    precio_base_kwh: number;
    base_discount_percent: number;
    inc_discount_percent: number;
    max_discount_percent: number;
    activated: boolean;
    fecha_ini: string;
    fecha_fin: string;

    constructor(
        precio_base_kwh: number,
        base_discount_percent: number,
        inc_discount_percent: number,
        max_discount_percent: number,
        activated: boolean,
        fecha_ini: string,
        fecha_fin: string
    )
    {
        this.precio_base_kwh = precio_base_kwh;
        this.base_discount_percent = base_discount_percent;
        this.inc_discount_percent = inc_discount_percent;
        this.max_discount_percent = max_discount_percent;
        this.activated = activated;
        this.fecha_ini = fecha_ini;
        this.fecha_fin = fecha_fin;
    }

    
    /**
     * Obtiene el precio final del kwh de la estación en función de 
     * las veces que haya recargado un usuario y el tipo de conector
     * @param tipo_conector: tipo de conector que necesita el usuario para recargar
     * @param _id_estacion: identificador de la estación de servicio
     * @param _id_usuario: identificador del usuario
     * @returns precio_final: -1 si no está activo el filtro, precio_final si está activo
     */
    public applyFilters(tipo_conector: TipoConector, _id_estacion: string, _id_usuario:string): number{
        throw new Error("not Implemented")
    }




    /**
     * Obtiene el número de veces que el usuario ha repostado en
     * la estación de servicio en las fechas del filtro de precio
     * @param _id_estacion: identificador de la estación de servicio
     * @param _id_usuario: identificador del usuario
     * @returns numero_veces: -1 si no está activo el filtro, n si está activo
     */
    public getUserRechargeTimes(_id_estacion: string, _id_usuario: string): number{
        throw new Error("not Implemented")
    }



}