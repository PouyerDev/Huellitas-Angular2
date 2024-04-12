import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Veterinario } from '../model/veterinario';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(
    private http: HttpClient
  ) { }

 

  getAllVeterinarios(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>('http://localhost:8090/veterinarios/all');
  }

  getVeterinarioById(id: string): Observable<Veterinario> {
    return this.http.get<Veterinario>('http://localhost:8090/veterinarios/find/' + id);
  
  }
  
  deleteVeterinario(id: string): Observable<void> {
  return this.http.delete<void>('http://localhost:8090/veterinarios/delete/' + id);
}


  // Método para actualizar un veterinario
  actualizarVeterinario(veterinario: Veterinario){
    // Lógica para actualizar el veterinario en tu backend
    this.http.put('http://localhost:8090/veterinarios//update/' + veterinario.id, veterinario);
  }

  // Método para crear un nuevo veterinario
  crearVeterinario(veterinario: Veterinario) {
    this.http.post('http://localhost:8090/veterinarios/agregar', veterinario)
  }
}