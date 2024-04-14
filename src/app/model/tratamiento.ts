import { Droga } from "./droga";
import { Mascota } from "./mascota";
import { Veterinario } from "./veterinario";

export class Tratamiento {
    public id: string;
    public descripcion: string;
    public fechaInicio: string;
    public fechaFin: string;
    public mascota?: Mascota;
    public droga?: Droga;
    public veterinario?: Veterinario;

    constructor(id: string, descripcion: string, fechaInicio: string, fechaFin: string, droga?: Droga, mascota?: Mascota, veterinario?: Veterinario) {
        this.id = id;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.mascota = mascota;
        this.droga = droga;
        this.veterinario = veterinario;
    }
}