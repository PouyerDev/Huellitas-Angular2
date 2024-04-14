import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from '../model/cliente'; // Assuming you have a Cliente model
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class DrogaService {
    constructor( 
        private http: HttpClient
      ) { }
      obtenerPorNombre(nombre: string): Observable<any> {
        return this.http.get('http://localhost:8090/drogas/getBynombre/' + nombre);
    }
    getAllDrogas(): Observable<any> {
        return this.http.get('http://localhost:8090/drogas/all');
    }
}