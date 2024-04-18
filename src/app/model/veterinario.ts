export class Veterinario {
    public id: string;
    public cedula: string;
    public nombre: string ; 
    public especialidad: string ;
    public foto: string ;
    public numAtenciones: number;
    public estado: boolean = true;

    constructor(id: string, cedula: string, nombre: string, especialidad: string, foto: string, numAtenciones: number) {
        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.foto = foto;
        this.numAtenciones = numAtenciones;
    }
}
