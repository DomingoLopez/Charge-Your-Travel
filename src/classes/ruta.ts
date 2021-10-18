import { UsuarioParticular } from './usuario-particular';
import { Coordenadas } from './coordenadas';
import { EstacionServicio } from './estacion-servicio';
import { Impresion } from './impresion';


export class Ruta{


    constructor(
        private distancia_total: number,
        private usuario_particular: UsuarioParticular,
        private coord_destino: Coordenadas,
        private estaciones_servicio: EstacionServicio[],
        private impresiones?: Impresion[]) {
    }



    public calculaRutaOptima(){
        throw new Error("not Implemented")
    }

    public addImpresion(impresion: Impresion){
        throw new Error("not Implemented")
    }

}