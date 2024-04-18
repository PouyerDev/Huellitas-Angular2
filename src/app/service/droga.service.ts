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
    return this.http.delete<void>(this.apiUrl + 'delete/' + id);
  }
  modificarDroga(droga: Droga): Observable<void> {
    return this.http.put<void>(this.apiUrl + 'update', droga);
  }

  getTratamientosByDrogaId(id: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl+'/getAllTratamientos/'+id);
  }

  actualizarDroga(droga: Droga){
    console.log("actualizando servicio angular");
    
    this.http.put('http://localhost:8090/drogas/update/' + droga.id, droga)
      .subscribe(
        response => {
          console.log("droga actualizada correctamente:", response);
          // Aquí puedes agregar lógica para actualizar la interfaz de usuario si es necesario
        },
        error => {
          console.error("Error al actualizar el droga:", error);
          // Aquí puedes manejar el error adecuadamente si lo deseas
        }
      );
  }
  
  // Método para crear un nuevo veterinario
  crearDroga(droga: Droga) { 
    console.log("creando servicio angular");
    
    this.http.post('http://localhost:8090/drogas/add', droga)
      .subscribe(
        response => {
          console.log("droga creada correctamente:", response);
          // Aquí puedes agregar lógica para actualizar la interfaz de usuario si es necesario
        },
        error => {
          console.error("Error al crear el droga:", error);
          // Aquí puedes manejar el error adecuadamente si lo deseas
        }
      );
  }


//GetbyName

  obtenerPorNombre(nombre: string): Observable<any> {
    return this.http.get('http://localhost:8090/drogas/getBynombre/' + nombre);
  }
  getAllDrogas(): Observable<any> {
    return this.http.get('http://localhost:8090/drogas/all');
  }
  getAllDrogasValidas(): Observable<any> {
    return this.http.get('http://localhost:8090/drogas/allValidas');
  }
  
}