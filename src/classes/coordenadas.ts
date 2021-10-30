

export class Coordenadas {

    lat: number;
    lon: number;

    constructor(lat: number,
                lon: number) 
    {
        this.lat = lat;
        this.lon = lon;
    }


    calculaDistanciaEuclidea(coordenadas_destino: Coordenadas): number{
        throw new Error("not Implemented")
    }


    calculaDistanciaManhattan(coordenadas_destino: Coordenadas): number{
        throw new Error("not Implemented")
    }

}