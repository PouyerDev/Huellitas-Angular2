import { Mascota } from "../mascota/mascota";

export class tratamiento {
    public id: string;
    public descripcion: string;
    public fechaInicio: string;
    public fechaFin: string;
    public mascotaId: string;
    public drogaId: string;
    public veterinarioId: string;

    constructor(id: string, descripcion: string, fechaInicio: string, fechaFin: string, mascotaId: string, drogaId: string, veterinarioId: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.mascotaId = mascotaId;
        this.drogaId = drogaId;
        this.veterinarioId = veterinarioId;
    }
}