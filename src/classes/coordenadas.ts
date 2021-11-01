

export class Coordenadas {

    lat: number;
    lon: number;

    constructor(lat: number,
                lon: number) 
    {
        this.lat = lat;
        this.lon = lon;
    }



    /**.
     * Obtiene distancia a las coordenadas utilizando la fórmula del semiverseno
     * Más info en http://www.movable-type.co.uk/scripts/latlong.html 
     * @param coordenadas_destino: coordenadas
     * @returns distancia a las coordenadas
     */
    calculaDistancia(coordenadas_destino: Coordenadas): number{
        let radio_tierra = 6371; // Radio de la tierra en kilómetros
        let lat_rad = (coordenadas_destino.lat - this.lat)*(Math.PI/180); //Pasamos latitud de grados a radianes
        let lon_rad = (coordenadas_destino.lon - this.lon)*(Math.PI/180); //Pasamos longitud de grados a radianes
        let a = 
            Math.sin(lat_rad/2) * Math.sin(lat_rad/2) +
            Math.cos((this.lat)*(Math.PI/180)) * Math.cos((coordenadas_destino.lat)*(Math.PI/180)) * 
            Math.sin(lon_rad/2) * Math.sin(lon_rad/2); 
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        let d = radio_tierra * c; //Distancia en kilómetros
        return d;
    }

   

}