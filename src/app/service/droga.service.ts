import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/cliente'; // Assuming you have a Cliente model
import { HttpClient } from '@angular/common/http';
import { Droga } from '../model/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  private apiUrl = 'http://localhost:8090/drogas/';


  constructor(
    private http: HttpClient
  ) { }
  //CRUD
  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>(this.apiUrl + 'all');
  }
  findById(id: string): Observable<Droga> {
    return this.http.get<Droga>(this.apiUrl + 'find/' + id);
  }
  agregarDroga(droga: Droga): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'add', droga);
  }
  borrarDroga(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + 'delete/' + id);
  }
  deleteDroga(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/delete/' + id);
  }
  modificarDroga(droga: Droga): Observable<any> {
    return this.http.put<any>(this.apiUrl + 'update', droga);
  }





//GetbyName

  obtenerPorNombre(nombre: string): Observable<any> {
    return this.http.get('http://localhost:8090/drogas/getBynombre/' + nombre);
  }
  getAllDrogas(): Observable<any> {
    return this.http.get('http://localhost:8090/drogas/all');
  }
}