

export class FiltroPrecio{

    constructor(
        private precio_base_kwh: number,
        private base_discount_percent: number,
        private inc_discount_percent: number,
        private max_discount_percent: number,
        private activated: boolean,
        private fecha_ini: string,
        private fecha_fin: string
    ){}

    /**
     * Logic Methods
     */

    public applyFilters(totalPrice: number, userID: string): number{
        throw new Error("not Implemented")
    }

    
    /**
     * Getters
     */

    public get precioBaseKwh() : number {
        return this.precio_base_kwh;
    }

    public get baseDiscountPercent() : number {
        return this.base_discount_percent;
    }

    public get incDiscountPercent() : number {
        return this.inc_discount_percent;
    }

    public get maxDiscountPercent() : number {
        return this.max_discount_percent;
    }
    
    public get isActive() : boolean {
        return this.activated;
    }

    
    public get fechaIni() : string {
        return this.fecha_ini;
    }
    
    public get fechaFin() : string {
        return this.fecha_fin;
    }

    
    /**
     * 
     * Setters
     */

    public setPrecioBaseKwh(preciobase: number){
        throw new Error("not Implemented")
    }

    public setBaseDiscountPercent(baseDiscount: number){
        throw new Error("not Implemented")
    }

    public setIncDiscountPercent(incDiscountPercent: number){
        throw new Error("not Implemented")
    }

    public setMaxDiscountPercent(maxDiscount: number){
        throw new Error("not Implemented")
    }

    public setActive(active: boolean): void{
        throw new Error("not Implemented")
    }


    public setFechaIni(fecha: string){
        throw new Error("not Implemented")
    }

    public setFechaFin(fecha: string){
        throw new Error("not Implemented")
    }




}