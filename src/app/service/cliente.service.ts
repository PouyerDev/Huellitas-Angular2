import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/cliente'; // Assuming you have a Cliente model
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  

  constructor( 
    private http: HttpClient
  ) { }

  baseUrl: string = 'http://localhost:8090/clientes';
  result: any;
  cliente: Cliente | undefined;
  
  getAllClientes(): Observable<Cliente[]> {
    // Return an observable of the client list
    console.log('obteniendo los clientes ' , this.http.get<Cliente[]>(this.baseUrl+'/all'));
    return this.http.get<Cliente[]>(this.baseUrl+'/all');
  }

  getClienteByCedula(cedula: string): Observable<Cliente> {
   /*
    this.result = this.http.get<any>(this.baseUrl+'/findCedula/'+cedula);
    this.cliente = new Cliente (this.result.id, this.result.cedula, this.result.nombre, this.result.correo, this.result.celular, this.result.mascotas);
   
    return of(this.cliente); */
    return this.http.get<Cliente>(this.baseUrl+'/findCedula/'+cedula);
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

  addMascotaCliente(mascotaId: number, clienteId: string): Observable<void> {
    const datos = [clienteId, mascotaId];
    return this.http.post<any>(this.baseUrl + '/addMascotaCliente', datos);
  }

  login(user:User):Observable<String>{
    console.log('User service', user.cedula, user.password)
    return this.http.post("http://localhost:8090/clientes/login",user,
      {
        responseType: 'text'
      }
    );
  }
/* actualizarCliente(cliente: Cliente): Observable<void> {
    return this.http.put<void>(this.baseUrl+'/update', cliente);
  }
 */
}