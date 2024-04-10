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
      nombre: 'Dr. Daniel Gosling',
      cedula: '123456789',
      especialidad: 'Castración',
      foto: 'https://media.glamourmagazine.co.uk/photos/6138c2682b5bbea008293ea2/master/w_320%2Cc_limit/4-Ryan-Gosling-Doctor-GL_03Apr13_rex_b.jpg',
      numAtenciones: 10
    },
    {
      id: '2',
      nombre: 'Dra. Andrea Rodriguez',
      cedula: '987654321',
      especialidad: 'Dermatología',
      foto: 'https://cdn.pixabay.com/photo/2024/02/23/15/16/ai-generated-8592228_640.jpg',
      numAtenciones: 15
    },
    {
      id: '3',
      nombre: 'Dr. Natalia Gomez',
      cedula: '456789123',
      especialidad: 'Oftalmología',
      foto: 'https://img.freepik.com/fotos-premium/medicina-mascota-animales-atencion-salud-concepto-personas-veterinario-feliz-o-sosteniendo-perro-salchicha-clinica-veterinaria_380164-112102.jpg?w=360',
      numAtenciones: 8
    },
  ];

  getAllVeterinarios(): Observable<Veterinario[]> {
    return of(this.veterinariosList);
  }

  getVeterinarioById(id: string): Observable<Veterinario | undefined> {
    return of(this.veterinariosList.find(veterinario => veterinario.id === id));
  }
  
  deleteVeterinario(id: string): Observable<void> {

    const index = this.veterinariosList.findIndex(veterinario => veterinario.id === id);
    if (index !== -1) {
 
      this.veterinariosList.splice(index, 1);
    }
    // Return an observable indicating the deletion was successful
    return of();
  }

  // Método para actualizar un veterinario
  actualizarVeterinario(veterinario: Veterinario): Observable<Veterinario> {
    // Lógica para actualizar el veterinario en tu backend
    return of(veterinario);
  }

  // Método para crear un nuevo veterinario
  crearVeterinario(veterinario: Veterinario): Observable<Veterinario> {
    this.veterinariosList.push(veterinario); 
    // Lógica para crear un nuevo veterinario en tu backend
    return of(veterinario);
  }
}

