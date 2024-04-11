import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/cliente'; // Assuming you have a Cliente model
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  

  constructor( 
    private http: HttpClient
  ) { }

  baseUrl: string = 'http://localhost:8090/clientes';

  getAllClientes(): Observable<Cliente[]> {
    // Return an observable of the client list
    return this.http.get<Cliente[]>(this.baseUrl+'/all');
  }
  
  getClienteById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl+'/find/'+id);
  }
  deleteCliente(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl+'/delete/'+id);
  }
  actualizarCliente(cliente: Cliente): Observable<void> {
    return this.http.put<void>(this.baseUrl+'/update', cliente);
  }
  crearCliente(cliente: Cliente): Observable<void> {
    return this.http.post<void>(this.baseUrl+'/add', cliente);
  }

  getMascotasByClienteId(id: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl+'/getAllMascotas/'+id);
  }
/*/clientes/getAllMascotas/{id}
  getClienteById(id: string): Observle<Cliente | undefined> {
    return of(this.clientesList.find(cliente => cliente.id === id)); // Return an observable of the client or undefined
  }

  deleteCliente(id: string): Observable<void> {
    // Find the index of the client to delete
    const index = this.clientesList.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
      // Remove the client from the array
      this.clientesList.splice(index, 1)ab;
    }
    // Return an observable indicating the deletion was successful
    return of();
  }

  // Método para actualizar un cliente
  actualizarCliente(cliente: Cliente): Observable<Cliente> {
    // Lógica para actualizar el cliente en tu backend
    return of(cliente);
  }

  // Método para crear un nuevo cliente
  crearCliente(cliente: Cliente): Observable<Cliente> {
    this.clientesList.push(cliente); 
    // Lógica para crear un nuevo cliente en tu backend
    return of(cliente);
  }
  */
}