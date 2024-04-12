import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/model/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private apiUrl = 'http://localhost:8090/mascotas/'; // URL de la API REST

  constructor(private http: HttpClient) { }

  findAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl+'all');
  }

  findById(id: string): Observable<Mascota> {
    return this.http.get<Mascota>(this.apiUrl+'find/'+id);
  }
  agregarMascota(mascota: Mascota): Observable<any> {
    
    return this.http.post<any>(this.apiUrl+'add', mascota);
  }

  deactivateMascota(id: string): Observable<any> {
    console.log('Desactivando mascota en el servicio:', id);
    return this.http.get<any>(this.apiUrl+'deactivate/'+id);
  }

  actualizarMascota(mascota: Mascota): Observable<any> {
    return this.http.put<any>(this.apiUrl+'update', mascota);
  }
  
    

}
