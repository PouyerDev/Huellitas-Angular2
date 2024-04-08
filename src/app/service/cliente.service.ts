import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/cliente'; // Assuming you have a Cliente model

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  clientesList: Cliente[] = [
    {
      id: '1',
      nombre: 'Juan Perez',
      cedula: '123456789',
      correo: 'juan@example.com',
      celular: '1234567890', // Assuming you have celular instead of direccion
    },
    {
      id: '2',
      nombre: 'Maria Rodriguez',
      cedula: '987654321',
      correo: 'maria@example.com',
      celular: '9876543210',
    },
    {
      id: '3',
      nombre: 'Pedro Gomez',
      cedula: '456789123',
      correo: 'pedro@example.com',
      celular: '4567891230',
    },
  ];

  getAllClientes(): Observable<Cliente[]> {
    return of(this.clientesList); // Return an observable of the client list
  }

  // You may also implement a method to get a single client by ID
  getClienteById(id: string): Observable<Cliente | undefined> {
    return of(this.clientesList.find(cliente => cliente.id === id)); // Return an observable of the client or undefined
  }
  
}
