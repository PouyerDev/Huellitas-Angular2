import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Veterinario } from '../model/veterinario';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../mascota/mascota';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAllVeterinarios(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>('http://localhost:8090/veterinarios/all');
  }

  getVeterinarioById(id: string): Observable<Veterinario> {
    return this.http.get<Veterinario>('http://localhost:8090/veterinarios/find/' + id);
  
  }
  
  deleteVeterinario(id: string ): Observable<void> {
  return this.http.delete<void>('http://localhost:8090/veterinarios/delete/' + id);
}


  // Método para actualizar un veterinario
  // Método para actualizar un veterinario
actualizarVeterinario(veterinario: Veterinario){
  console.log("actualizando servicio angular");
  
  this.http.put('http://localhost:8090/veterinarios/update', veterinario)
    .subscribe(
      response => {
        console.log("Veterinario actualizado correctamente:", response);
        this.router.navigate(['/veterinarios/detail', veterinario.id]);
      },
      error => {
        console.error("Error al actualizar el veterinario:", error);
        // Aquí puedes manejar el error adecuadamente si lo deseas
      }
    );
}

// Método para crear un nuevo veterinario
crearVeterinario(veterinario: Veterinario) { 
  console.log("creando servicio angular");
  
  this.http.post('http://localhost:8090/veterinarios/add', veterinario)
    .subscribe(
      response => {
        console.log("Veterinario creado correctamente:", response);
        // Aquí puedes agregar lógica para actualizar la interfaz de usuario si es necesario
        this.router.navigate(['/veterinarios']);
      },
      error => {
        console.error("Error al crear el veterinario:", error);
        // Aquí puedes manejar el error adecuadamente si lo deseas
      }
    );
}

  obtenerPorCedula(cedula: string) {
    return this.http.get<Veterinario>('http://localhost:8090/veterinarios/findByCedula/' + cedula);

  }

  cambiarEstadoVeterinario(veterinarioId: string) {
    return this.http.put('http://localhost:8090/veterinarios/changeState', veterinarioId);
  }


  getMascotasByVeterinarioId(id: string): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/veterinarios/getAllMascotas/'+id);
  }
}
