export class droga {
    public id: string ;
    public nombre: string ;
    public precioCompra: number ;
    public precioVenta: number ;
    public unidadesDisponibles: number ;
    public unidadesVendidas: number ;

    constructor(id: string, nombre: string, precioCompra: number, precioVenta: number, unidadesDisponibles: number, unidadesVendidas: number) {
        this.id = id;
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.unidadesDisponibles = unidadesDisponibles;
        this.unidadesVendidas = unidadesVendidas;
    }
}