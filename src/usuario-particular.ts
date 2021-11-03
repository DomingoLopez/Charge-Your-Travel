import { Vehiculo } from "./vehiculo";


export class UsuarioParticular{


    _id: string;
    lat_ini: number;
    lat_fin: number;
    vehiculo: Vehiculo;

    constructor(
        _id: string,
        lat_ini: number,
        lat_fin: number,
        vehiculo: Vehiculo) 
    {
        this._id = _id;
        this.lat_ini = lat_ini;
        this.lat_fin = lat_fin;
        this.vehiculo = vehiculo;
    }



    public getEstacionesCercanas(){
        throw new Error("not Implemented")
    }
    
  
    

}