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
  
  activateMascota(mascotaId: string, clientId: string): Observable<void> {
    console.log('Activando mascota en el servicio:', mascotaId, clientId);
    return this.http.get<void>('http://localhost:8090/mascotas/activate/'+mascotaId+'/'+clientId, {});
  }

  addMascotaCliente(mascotaId: string, clienteId: string): Observable<void> {
    const body = { idCliente: clienteId, idMascota: mascotaId };
    return this.http.post<void>(`${this.baseUrl}/addMascotaCliente`, body);
  }
/* actualizarCliente(cliente: Cliente): Observable<void> {
    return this.http.put<void>(this.baseUrl+'/update', cliente);
  }
 */
}