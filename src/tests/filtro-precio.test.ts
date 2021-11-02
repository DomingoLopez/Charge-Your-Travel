import { FiltroPrecio } from '../classes/filtro-precio';
import { TipoConector } from '../classes/enum/tipo-conector';


describe('FiltroPrecio tests', () => {

    /*Parámetros que pueden recibir los métodos*/
    let filtro_precio : FiltroPrecio;
    let tipo_conector = TipoConector.CHADEMO;

    /*Parámetros de un objeto FiltroPrecio*/
    let params : {
        precio_base_kwh: number, 
        base_discount_percent: number,
        inc_discount_percent: number,
        max_discount_percent: number,
        activated: boolean,
        fecha_ini: string,
        fecha_fin: string
    };

    beforeAll(()=>{

        let fecha_inicio: Date = new Date();
        let fecha_final = new Date(fecha_inicio);
        fecha_inicio.setDate(fecha_inicio.getDate() - 30);
        fecha_final.setDate(fecha_final.getDate() + 30);

        params = {
            precio_base_kwh: 0.14, 
            base_discount_percent: 0.05,
            inc_discount_percent: 0.03,
            max_discount_percent: 0.2,
            activated: true,
            fecha_ini: fecha_inicio.toISOString(),
            fecha_fin:fecha_final.toISOString()
        }
        filtro_precio = new FiltroPrecio(
           params.precio_base_kwh,
           params.base_discount_percent,
           params.inc_discount_percent,
           params.max_discount_percent,
           params.activated,
           params.fecha_ini,
           params.fecha_fin
        );
    });


    afterEach(()=>{

        filtro_precio.fecha_ini = params.fecha_ini;
        filtro_precio.fecha_fin = params.fecha_fin;
        tipo_conector = TipoConector.CHADEMO;
        filtro_precio.activated = true;

    });


    test("FiltroPrecio debe crearse correctamente", () =>{

        expect(filtro_precio.precio_base_kwh).toBe(params.precio_base_kwh);
        expect(filtro_precio.base_discount_percent).toBe(params.base_discount_percent);
        expect(filtro_precio.inc_discount_percent).toBe(params.inc_discount_percent);
        expect(filtro_precio.max_discount_percent).toBe(params.max_discount_percent);
        expect(filtro_precio.activated).toBe(params.activated);
        expect(filtro_precio.fecha_ini).toBe(params.fecha_ini);
        expect(filtro_precio.fecha_fin).toBe(params.fecha_fin);
    });

    
    //applyFilters

    test("applyFilters devuelve el precio base si la fecha actual no está entre fecha_ini y fecha_fin", ()=>{

        let fecha_fuera_de_rango: Date = new Date(filtro_precio.fecha_ini); 
        fecha_fuera_de_rango.setDate(fecha_fuera_de_rango.getDate() + 1);
        //fecha_fin = fecha_ini +1;
        filtro_precio.fecha_fin = fecha_fuera_de_rango.toISOString();
        expect(filtro_precio.applyFilters(tipo_conector,"usuario_test_id","estacion_test_id")).toBe(filtro_precio.precio_base_kwh);

    });

    test("applyFilters devuelve el precio base si el filtro no está activo", ()=>{

        filtro_precio.activated = false;
        expect(filtro_precio.applyFilters(tipo_conector,"usuario_test_id","estacion_test_id")).toBe(filtro_precio.precio_base_kwh);

    });

    test("applyFilters devuelve precio del kwh descontado si la fecha actual está en rango de las fechas del filtro y este está activado", ()=>{

        expect(filtro_precio.applyFilters(tipo_conector,"usuario_test_id","estacion_test_id")).toBeGreaterThanOrEqual(0);

    });

    test("applyFilters devuelve precio del kwh descontado y con un 21% de cargo si el conetor es de tipo CARGA_RAPIDA", ()=>{

        let total_discount = filtro_precio.applyFilters(tipo_conector,"usuario_test_id","estacion_test_id");
        tipo_conector = TipoConector.CARGA_RAPIDA;
        expect(filtro_precio.applyFilters(tipo_conector,"usuario_test_id","estacion_test_id")).toBe(total_discount*1.21);

    });

});