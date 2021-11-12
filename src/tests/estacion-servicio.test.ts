import { FiltroPrecio } from '../filtro-precio';
import { TipoConector } from '../enum/tipo-conector';
import { Coordenadas } from '../coordenadas';
import { EstacionServicio } from '../estacion-servicio';


describe('EstacionServicio tests', () => {

    /*Inicializamos parámetros*/
    let fecha_inicio: Date = new Date();
    let fecha_final = new Date(fecha_inicio);
    fecha_inicio.setDate(fecha_inicio.getDate() - 30);
    fecha_final.setDate(fecha_final.getDate() + 30);

    let estacion_servicio_1 : EstacionServicio;
    let estacion_servicio_2 : EstacionServicio;

    let conectores_1 : TipoConector [] = [TipoConector.CARGA_RAPIDA, TipoConector.CHADEMO, TipoConector.SCHUKO]; 
    let conectores_2 : TipoConector [] = [TipoConector.CARGA_RAPIDA, TipoConector.SCHUKO]; 

    let coordenadas_1 : Coordenadas = new Coordenadas(-4.56, 5.14);
    let coordenadas_2 : Coordenadas = new Coordenadas(-4.56, 5.13);

    let estaciones : EstacionServicio [] = [];

    let filtro_precio_1: FiltroPrecio = new FiltroPrecio(
                        0.14,
                        0.05,
                        0.03,
                        0.2,
                        true,
                        fecha_inicio.toISOString(),
                        fecha_final.toISOString()
    );
    let filtro_precio_2: FiltroPrecio = new FiltroPrecio(
                        0.10,
                        0.05,
                        0.03,
                        0.2,
                        true,
                        fecha_inicio.toISOString(),
                        fecha_final.toISOString()
    );

    /*Parámetros de un objeto EstacionServicio*/
    interface TestInterface {
        _id: string, 
        coord: Coordenadas,
        filtro_precio: FiltroPrecio,
        tipo_conector: TipoConector []
    }
    let test_int_1 : TestInterface;
    let test_int_2 : TestInterface;
    

    beforeAll(()=>{

        test_int_1 = {
            _id: 'id_estacion_1', 
            coord: coordenadas_1,
            filtro_precio: filtro_precio_1,
            tipo_conector: conectores_1
        }

        test_int_2 = {
            _id: 'id_estacion_2', 
            coord: coordenadas_2,
            filtro_precio: filtro_precio_2,
            tipo_conector: conectores_2
        }

        estacion_servicio_1 = new EstacionServicio(
            test_int_1._id,
            test_int_1.coord,
            test_int_1.filtro_precio,
            test_int_1.tipo_conector           
        );

        estacion_servicio_2 = new EstacionServicio(
            test_int_2._id,
            test_int_2.coord,
            test_int_2.filtro_precio,
            test_int_2.tipo_conector           
        );

        estaciones.push(estacion_servicio_1);
        estaciones.push(estacion_servicio_2);


    });

    


    afterEach(()=>{

        estacion_servicio_1.filtro_precio.activated = true;
        estacion_servicio_2.filtro_precio.activated = true;

        estacion_servicio_1.tipo_conector = conectores_1;
        estacion_servicio_2.tipo_conector = conectores_2;

        estacion_servicio_1.filtro_precio.precio_base_kwh = 0.14;
        estacion_servicio_2.filtro_precio.precio_base_kwh = 0.10;

        estaciones = [];
        estaciones.push(estacion_servicio_1);
        estaciones.push(estacion_servicio_2);

    });


    test("La Estación de servicio debe crearse correctamente", () =>{

        expect(estacion_servicio_1._id).toBe(test_int_1._id);
        expect(estacion_servicio_1.coord).toBe(test_int_1.coord);
        expect(estacion_servicio_1.filtro_precio).toBe(test_int_1.filtro_precio);
        expect(estacion_servicio_1.tipo_conector).toBe(test_int_1.tipo_conector);
       
    });

    test("Solo se deben obtener las estaciones de servicio que sean alcanzables con la autonomia del vehiculo",()=>{

        //Coordenadas del usuario a menos de 350 km de la estación
        expect(estacion_servicio_1.isReachable(350, new Coordenadas(-4.56, 5.135)))
            .toBe(true);

        //Autonomía del usuario inferior a la distancia a la estación. Solo 100 metros de autonomía
        expect(estacion_servicio_1.isReachable(0.1, new Coordenadas(-4.56, 5.135)))
            .toBe(false);

    });


    test("Solo se deben obtener las estaciones de servicio que contengan el tipo de conector del vehículo del usuario", ()=>{

        //Debe devolver solo la primera estación de servicio que sí tiene ese conector
        expect(EstacionServicio.getEstacionesPrioritarias('id_usuario',TipoConector.CHADEMO, new Coordenadas(-4.56, 5.135), 350, estaciones))
            .toEqual([estacion_servicio_1]);

        //Debe devolver ambas estaciones de servicio
        expect(EstacionServicio.getEstacionesPrioritarias('id_usuario',TipoConector.CARGA_RAPIDA, new Coordenadas(-4.56, 5.135), 350, estaciones))
            .toEqual([estacion_servicio_2,estacion_servicio_1]);

    });

    test("Las estaciones de servicio devueltas deben estar ordenadas por precio total ascendente", ()=>{

        
        expect(EstacionServicio.getEstacionesPrioritarias('id_usuario',TipoConector.CARGA_RAPIDA, new Coordenadas(-4.56, 5.135), 350, estaciones))
            .toEqual([estacion_servicio_2,estacion_servicio_1]);

        //Hacemos que la estación 1 sea más barata que la 2
        estacion_servicio_1.filtro_precio.precio_base_kwh = 0.01;
        expect(EstacionServicio.getEstacionesPrioritarias('id_usuario',TipoConector.CARGA_RAPIDA, new Coordenadas(-4.56, 5.135), 350, estaciones))
            .toEqual([estacion_servicio_1,estacion_servicio_2]);

    });

    
    


});