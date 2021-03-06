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
     * las veces que haya recargado un usuario y el tipo de conector.
     * Si el conector es carga rápida se incrementa el precio final un 21%
     * @param tipo_conector: tipo de conector que necesita el usuario para recargar
     * @param _id_estacion: identificador de la estación de servicio
     * @param _id_usuario: identificador del usuario
     * @param total_recargas: número de recargas que ha realizado el usuario en la estación de servicio durante el período fijado en el filtro si este está activo
     * @returns precio_final: precio base si no está activo el filtro o fuera de rango de fechas, precio_final si está activo
     */
    public applyFilters(tipo_conector: TipoConector, total_recargas:number): number{
        
        let fecha_consulta : Date = new Date();
        if( this.activated && 
            fecha_consulta >= new Date(this.fecha_ini) && 
            fecha_consulta <= new Date(this.fecha_fin) ){

    
            let descuento_aplicable = this.base_discount_percent + (total_recargas*this.inc_discount_percent);
            let total_discount = descuento_aplicable > this.max_discount_percent ? this.max_discount_percent : descuento_aplicable;
            
            //Si el conector es carga rápida el precio se incrementa un 21%
            return tipo_conector === TipoConector.CARGA_RAPIDA ? 
                    (this.precio_base_kwh - (this.precio_base_kwh*total_discount))*1.21 : 
                    (this.precio_base_kwh - (this.precio_base_kwh*total_discount));

        }else{
            return this.precio_base_kwh;
        }
    }


};
