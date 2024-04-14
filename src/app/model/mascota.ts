import { Tratamiento } from "./tratamiento";

export class Mascota {
  public id: string;
  public nombre: string;
  public raza: string;
  public edad: number;
  public peso: number;
  public enfermedad: string;
  public foto: string;
  // no obligatorio
  public estado: boolean;
  tratamientos?: Tratamiento[];

  constructor(
    nombre: string,
    raza: string,
    edad: number,
    peso: number,
    enfermedad: string,
    foto: string,
    estado: boolean,
    id: string,
    tratamientos?: Tratamiento[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.peso = peso;
    this.enfermedad = enfermedad;
    this.foto = foto;
    this.estado = estado;
    this.tratamientos = [];
  }
}
