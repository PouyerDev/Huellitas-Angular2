import { Injectable } from '@angular/core';
import { Mascota } from '../mascota/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() { }

  mascotasList: Mascota[] = [
    {
      id: '1',
      nombre: 'Firulais',
      raza: 'Pastor Aleman',
      edad: 5,
      peso: 20,
      enfermedad: 'Moquillo',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQml49j3dVd1cexLLID_-gRgBWA5VpTJlQCeKvHovCatw&s',
      estado: true,
    },
    {
      id: '2',
      nombre: 'Toby',
      raza: 'Chihuahua',
      edad: 2,
      peso: 5,
      enfermedad: 'Gripe',
      foto: 'https://i.pinimg.com/736x/28/d0/82/28d082bfaaac80cbe38d056d15929371.jpg',
      estado: true,
    },
    {
      id: '3',
      nombre: 'Rex',
      raza: 'Bulldog',
      edad: 3,
      peso: 15,
      enfermedad: 'Parvovirus',
      foto: 'https://i.pinimg.com/474x/1a/28/18/1a281824b2f1faab9678eab109d31c5b.jpg',
      estado: true,
    },
    {
      id: '4',
      nombre: 'Luna',
      raza: 'Labrador',
      edad: 4,
      peso: 25,
      enfermedad: 'Tos',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw9N8PMP1pL1Y6k4jw_HinzmWGx7uoJKoAnVW7Od4Xw&s',
      estado: true,
    },
  ];

  findAll(): Mascota[] {
    return this.mascotasList;
  }
  fidnById(id: string): Mascota {
    return this.mascotasList.find(mascota => mascota.id === id)!;
  }
    
}
