import { FiltroPrecio } from './filtro-precio';
import { Coordenadas } from './coordenadas';
import { TipoConector } from './enum/tipo-conector';


export class EstacionServicio{


    constructor(
        private _id: string,
        private coord: Coordenadas,
        private filtro_precio: FiltroPrecio,
        private tipo_conector: TipoConector[]) {
    }



    /**
     * Getters
     */

    public get id() : string {
        return this._id;
    }


    public getFiltroPrecio() : FiltroPrecio {
        return this.filtro_precio;
    }

    public getCoords(): Coordenadas{
        return this.coord;
    }

    public getConectores(): TipoConector[]{
        return this.tipo_conector;
    }

    public hasConnector(tipoConector: TipoConector): boolean{
        throw new Error("not Implemented")
    }
  

    

}