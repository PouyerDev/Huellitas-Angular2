import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from 'src/app/model/tratamiento';
import { Mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  private apiUrl = 'http://localhost:8090/tratamientos/'; 

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(this.apiUrl + 'all');
  }

  findById(id: string): Observable<Tratamiento> {
    return this.http.get<Tratamiento>(this.apiUrl + 'find/' + id);
  }

  agregarTratamiento(tratamiento: Tratamiento): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'add', tratamiento);
  }

  borrarTratamiento(id: string): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'delete/' + id);
  }

  modificarTratamiento(tratamiento: Tratamiento): Observable<any> {
    return this.http.put<any>(this.apiUrl + 'update/' + tratamiento.id, tratamiento);
  }
  
}
