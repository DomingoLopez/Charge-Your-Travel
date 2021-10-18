import { Vehiculo } from "./vehiculo";


export class UsuarioParticular{


    constructor(
        private _id: string,
        private vehiculos: Vehiculo[]) {
    }



    /**
     * Getters
     */

    public get id() : string {
        return this._id;
    }


    public vehiculoEnUso(id: string) : Vehiculo {
        //return this.vehiculos.filter(item => item.id === id)[0];
        throw new Error("not Implemented")
    }


    
  
    

}