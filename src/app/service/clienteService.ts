import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8090/clientes';

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/all`);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/find/${id}`);
  }

  addCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/agregar`, cliente);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`);
  }

  updateCliente(id: number, cliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update/${id}`, cliente);
  }
}
