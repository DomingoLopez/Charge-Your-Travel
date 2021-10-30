import { TipoImpresion } from "./enum/tipo-impresion";
import { TipoConector } from './enum/tipo-conector';

export class Impresion{

    _id: string;
    _id_usuario: string;
    tipo_conector: TipoConector;
    _id_estacion: string;
    timestamp: string;
    dist_ecu_estacion: number;
    tipo_impresion: TipoImpresion;

    constructor(
        _id: string,
        _id_usuario: string,
        tipo_conector: TipoConector,
        _id_estacion: string,
        timestamp: string,
        dist_ecu_estacion: number,
        tipo_impresion: TipoImpresion
    ) 
    {
        this._id = _id;
        this._id_usuario = _id_usuario;
        this.tipo_conector = tipo_conector;
        this._id_estacion = _id_estacion;
        this.timestamp = timestamp;
        this.dist_ecu_estacion = dist_ecu_estacion;
        this.tipo_impresion = tipo_impresion;
    }




    /**
     * Getters
     */

   
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