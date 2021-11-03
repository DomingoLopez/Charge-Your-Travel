import { TipoConector } from "./enum/tipo-conector";


export class Vehiculo {


    _id: string;
    carga_actual_percent: number;
    capacidad_total_kw: number;
    autonomia_actual_km: number;
    autonomia_global_km: number;
    tipo_conector: TipoConector;

    constructor(
        _id: string,
        carga_actual_percent: number,
        capacidad_total_kw: number,
        autonomia_actual_km: number,
        autonomia_global_km: number,
        tipo_conector: TipoConector) 
    {
        this._id = _id;
        this.carga_actual_percent = carga_actual_percent;
        this.capacidad_total_kw = capacidad_total_kw;
        this.autonomia_actual_km = autonomia_actual_km;
        this.autonomia_global_km = autonomia_global_km;
        this.tipo_conector = tipo_conector;
    }


}