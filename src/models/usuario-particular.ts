import { Vehiculo } from "./vehiculo";


export class UsuarioParticular{


    constructor(
        private _id: string,
        private lat_ini: number,
        private lat_fin: number,
        private vehiculo: Vehiculo) {
    }



    /**
     * Getters
     */

    public get id() : string {
        return this._id;
    }


    public getVehiculo() : Vehiculo {
        return this.vehiculo;
    }


    public getEstacionesCercanas(){
        throw new Error("not Implemented")
    }
    
  
    

}