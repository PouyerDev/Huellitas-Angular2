export class Cliente {
    public id: string;
    public cedula: string;
    public nombre: string;
    public correo: string;
    public celular: string;

    constructor(id: string, cedula: string, nombre: string, correo: string, celular: string) {
        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.correo = correo;
        this.celular = celular;
    }
}