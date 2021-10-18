import { TipoImpresion } from "./enum/tipo-impresion";
import { TipoConector } from './enum/tipo-conector';

export class Impresion{


    constructor(
        private _id: string,
        private _id_usuario: string,
        private tipo_conector: TipoConector,
        private _id_estacion: string,
        private timestamp: string,
        private dist_ecu_estacion: number,
        private tipo_impresion: TipoImpresion
        ) {
    }




    /**
     * Getters
     */

    public get id() : string {
        return this._id;
    }

    public addImpresion(): void{
        throw new Error("not Implemented")
    }

    public static getConectoresMasUsados(id_estacion?: string){
        throw new Error("not Implemented")
    }

    public static getAgrupadoConectoresSatisfactoria(id_estacion?: string){
        throw new Error("not Implemented")
    }

    public static getAgrupadoConectoresNoSatisfactoria(id_estacion?: string){
        throw new Error("not Implemented")
    }
    
    public static getAgrupadoConectoresNoSameConector(id_estacion?: string){
        throw new Error("not Implemented")
    }
  
    

}