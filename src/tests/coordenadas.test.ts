import { Coordenadas } from '../classes/coordenadas';


describe('Coordenadas tests', () => {

    /*Parámetros de un objeto Coordenadas*/
    let params : {
        lat: number,
        lon: number
    };

    interface TestInterface {
        lat: number,
        lon: number
    };
    let test_int : TestInterface;

    let coordenadas: Coordenadas;

    beforeAll(()=>{

        test_int = {lat: -4.85, lon:3.558};

        coordenadas = new Coordenadas(
           test_int.lat,
           test_int.lon
        );
    });


    afterEach(()=>{

        coordenadas.lat = test_int.lat;
        coordenadas.lon = test_int.lon;

    });


    test("Coordenadas debe crearse correctamente", () =>{

        expect(coordenadas.lat).toBe(test_int.lat);
        expect(coordenadas.lon).toBe(test_int.lon);
        
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