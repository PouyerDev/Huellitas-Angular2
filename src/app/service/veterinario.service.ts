import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Veterinario } from '../model/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor() { }

  veterinariosList: Veterinario[] = [
    {
      id: '1',
      nombre: 'Dr. Daniel Perez',
      cedula: '123456789',
      especialidad: 'Cirugía',
      foto: 'url_de_la_foto_1',
      numAtenciones: 10
    },
    {
      id: '2',
      nombre: 'Dra. Andrea Rodriguez',
      cedula: '987654321',
      especialidad: 'Dermatología',
      foto: 'url_de_la_foto_2',
      numAtenciones: 15
    },
    {
      id: '3',
      nombre: 'Dr. Natalia Gomez',
      cedula: '456789123',
      especialidad: 'Oftalmología',
      foto: 'url_de_la_foto_3',
      numAtenciones: 8
    },
  ];

  getAllVeterinarios(): Observable<Veterinario[]> {
    return of(this.veterinariosList);
  }

  getVeterinarioById(id: string): Observable<Veterinario | undefined> {
    return of(this.veterinariosList.find(veterinario => veterinario.id === id));
  }
}
