import { UsuarioParticular } from './usuario-particular';
import { Coordenadas } from './coordenadas';
import { EstacionServicio } from './estacion-servicio';
import { Impresion } from './impresion';


export class Ruta{


    distancia_total: number;
    usuario_particular: UsuarioParticular;
    coord_destino: Coordenadas;
    estaciones_servicio: EstacionServicio[];
    impresiones?: Impresion[];

    constructor(
        distancia_total: number,
        usuario_particular: UsuarioParticular,
        coord_destino: Coordenadas,
        estaciones_servicio: EstacionServicio[],
        impresiones?: Impresion[]) 
    {
        this.distancia_total = distancia_total;
        this.usuario_particular = usuario_particular;
        this.coord_destino = coord_destino;
        this.estaciones_servicio = estaciones_servicio;
        this.impresiones = impresiones;
    }


    public calculaRutaOptima(){
        throw new Error("not Implemented")
    }

    public addImpresion(impresion: Impresion){
        throw new Error("not Implemented")
    }

}