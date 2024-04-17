export class MascotaCL {
  public id: string;
  public nombre: string;
  public raza: string;
  public edad: number;
  public peso: number;
  public enfermedad: string;
  public foto: string;
  // no obligatorio
  public estado: boolean;

  constructor(
    id: string,
    nombre: string,
    raza: string,
    edad: number,
    peso: number,
    enfermedad: string,
    foto: string,
    estado: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.peso = peso;
    this.enfermedad = enfermedad;
    this.foto = foto;
    this.estado = estado;
  }
}
