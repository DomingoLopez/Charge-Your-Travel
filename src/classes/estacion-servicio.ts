import { FiltroPrecio } from './filtro-precio';
import { Coordenadas } from './coordenadas';
import { TipoConector } from './enum/tipo-conector';


export class EstacionServicio{

    _id: string;
    coord: Coordenadas;
    filtro_precio: FiltroPrecio;
    tipo_conector: TipoConector[];

    constructor(
        _id: string,
        coord: Coordenadas,
        filtro_precio: FiltroPrecio,
        tipo_conector: TipoConector[]) 
    {
        this._id = _id;
        this.coord = coord;
        this.filtro_precio = filtro_precio;
        this.tipo_conector = tipo_conector;
    }



    public hasConnector(tipoConector: TipoConector): boolean{
        throw new Error("not Implemented")
    }
  

    

}