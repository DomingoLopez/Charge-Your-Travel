import { Coordenadas } from '../classes/coordenadas';


describe('Coordenadas tests', () => {

    /*Parámetros de un objeto Coordenadas*/
    let params : {
        lat: number,
        lon: number
    };

    let coordenadas: Coordenadas;

    beforeAll(()=>{
        params = {
            lat: -4.85,
            lon: 3.558
        }
        coordenadas = new Coordenadas(
           params.lat,
           params.lon
        );
    });


    afterEach(()=>{

        coordenadas.lat = params.lat;
        coordenadas.lon = params.lon;

    });


    test("Coordenadas debe crearse correctamente", () =>{

        expect(coordenadas.lat).toBe(params.lat);
        expect(coordenadas.lon).toBe(params.lon);
        
    });

    
    //applyFilters

    test("calculaDistancia devuelve 0 km si hay mismas coordenadas origen y destino", ()=>{

        let lat_destino : number = -4.85;
        let lon_destino : number = 3.558;
        expect(coordenadas.calculaDistancia(new Coordenadas(lat_destino,lon_destino))).toBe(0);

    });

    test("calculaDistancia devuelve la distancia en km si las coordenadas origen y destino son distintas", ()=>{

        let lat_destino : number = -4.86; //notar -4.86 
        let lon_destino : number = 3.558;
        expect(coordenadas.calculaDistancia(new Coordenadas(lat_destino,lon_destino))).toBeGreaterThanOrEqual(0);

    });


   

});