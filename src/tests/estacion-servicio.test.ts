import { FiltroPrecio } from '../classes/filtro-precio';
import { TipoConector } from '../classes/enum/tipo-conector';
import { Coordenadas } from '../classes/coordenadas';
import { EstacionServicio } from '../classes/estacion-servicio';


describe('FiltroPrecio tests', () => {

    /*Inicializamos algunos*/
    let fecha_inicio: Date = new Date();
    let fecha_final = new Date(fecha_inicio);
    fecha_inicio.setDate(fecha_inicio.getDate() - 30);
    fecha_final.setDate(fecha_final.getDate() + 30);

    let estacion_servicio : EstacionServicio;
    let conectores : TipoConector [] = [TipoConector.CARGA_RAPIDA, TipoConector.CHADEMO, TipoConector.SCHUKO]; 
    let coordenadas : Coordenadas = new Coordenadas(-4.56, 5.13);
    let filtro_precio: FiltroPrecio = new FiltroPrecio(
                        0.14,
                        0.05,
                        0.03,
                        0.2,
                        true,
                        fecha_inicio.toISOString(),
                        fecha_final.toISOString()
    );

    /*Parámetros de un objeto EstacionServicio*/
    let params : {
        _id: string, 
        coord: Coordenadas,
        filtro_precio: FiltroPrecio,
        tipo_conector: TipoConector []
    };

    beforeAll(()=>{

        params = {
            _id: 'id_estacion', 
            coord: coordenadas,
            filtro_precio: filtro_precio,
            tipo_conector: conectores
        }

        estacion_servicio = new EstacionServicio(
           params._id,
           params.coord,
           params.filtro_precio,
           params.tipo_conector           
        );
    });


    afterEach(()=>{

        estacion_servicio.filtro_precio.activated = true;

    });


    test("Estación de servicio debe crearse correctamente", () =>{

        expect(estacion_servicio._id).toBe(params._id);
        expect(estacion_servicio.coord).toBe(params.coord);
        expect(estacion_servicio.filtro_precio).toBe(params.filtro_precio);
        expect(estacion_servicio.tipo_conector).toBe(params.tipo_conector);
       
    });

    
    

    test("hasConnector devuelve true si la estación de servicio dispone de ese tipo de conector", ()=>{

        expect(estacion_servicio.hasConnector(TipoConector.CARGA_RAPIDA)).toBe(true);

    });

    test("hasConnector devuelve false si la estación de servicio NO dispone de ese tipo de conector", ()=>{

        expect(estacion_servicio.hasConnector(TipoConector.TIPO_1)).toBe(false);

    });

    test("getPriceFilteredByUser devuelve numero mayor igual que 0 si se han aplicado los filtros correctamente", ()=>{

        expect(estacion_servicio.getPriceFilteredByUser(TipoConector.CARGA_RAPIDA,'user_id','station_id')).toBeGreaterThanOrEqual(0);

    });


    test("getPriceFilteredByUser devuelve el precio base si el filtro no está activo o no estamos en rango de fechas", ()=>{

        estacion_servicio.filtro_precio.activated = false;
        expect(estacion_servicio.getPriceFilteredByUser(TipoConector.CARGA_RAPIDA,'user_id','station_id')).toBe(estacion_servicio.filtro_precio.precio_base_kwh);

    });
    

    test("getDistanceToStation devuelve la distancia del semiverseno entre dos coordenadas", ()=>{

        const coord_2 = new Coordenadas(-3.5,-1.2);
        expect(estacion_servicio.getDistanceToStation(coord_2)).toBeGreaterThanOrEqual(0);

    });


});