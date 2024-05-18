import { Mascota } from 'src/app/model/mascota';

export class Cliente {
    public id: string;
    public cedula: string;
    public nombre: string;
    public correo: string;
    public celular: string;
    mascotas?: Mascota[];

    constructor(id: string, cedula: string, nombre: string, correo: string, celular: string, mascotas?: Mascota[]) {
        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.correo = correo;
        this.celular = celular;
        this.mascotas = [];
    }

}