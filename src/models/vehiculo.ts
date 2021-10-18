import { TipoConector } from "./tipo-conector";


export class Vehiculo {


    constructor(
        private _id: string,
        private carga_actual_percent: number,
        private capacidad_total_kw: number,
        private autonomia_actual_km: number,
        private autonomia_global_km: number,
        private tipo_conector: TipoConector) {
    }

    
    /**
     * Getters 
     */

    public get id() : string {
        return this._id;
    }

    public get cargaActualPercent() : number {
        return this.carga_actual_percent;
    }

    public get capacidadTotalKw() : number {
        return this.capacidad_total_kw;
    }

    public get autonomiaActualKm() : number {
        return this.autonomia_actual_km;
    }

    public get autonomiaGlobalKm() : number {
        return this.autonomia_global_km;
    }

    public get tipoConector() : number {
        return this.tipo_conector;
    }
    

    /**
     * Setters 
     */

    
    public set autonomiaActualKm(autonomiaKm : number) {
        //this.autonomia_actual_km = autonomiaKm;
        throw new Error("not Implemented")
    }
    

    public set cargaActualPercent(porcentaje : number) {
        //this.carga_actual_percent = porcentaje;
        throw new Error("not Implemented")
    }

}