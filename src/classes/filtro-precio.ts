

export class FiltroPrecio{

    precio_base_kwh: number;
    base_discount_percent: number;
    inc_discount_percent: number;
    max_discount_percent: number;
    activated: boolean;
    fecha_ini: string;
    fecha_fin: string;

    constructor(
        precio_base_kwh: number,
        base_discount_percent: number,
        inc_discount_percent: number,
        max_discount_percent: number,
        activated: boolean,
        fecha_ini: string,
        fecha_fin: string
    )
    {
        this.precio_base_kwh = precio_base_kwh;
        this.base_discount_percent = base_discount_percent;
        this.inc_discount_percent = inc_discount_percent;
        this.max_discount_percent = max_discount_percent;
        this.activated = activated;
        this.fecha_ini = fecha_ini;
        this.fecha_fin = fecha_fin;
    }

    /**
     * Logic Methods
     */

    public applyFilters(totalPrice: number, userID: string): number{
        throw new Error("not Implemented")
    }

  



}