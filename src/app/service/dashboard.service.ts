import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Droga } from 'src/app/model/droga';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:8090/dashboard';

  constructor(private http: HttpClient) { }

  numMascotas(): Observable<number> {
    return this.http.get<number>(this.baseUrl+'/numMascotas');
  }

  numMascotasTratamiento(): Observable<number> {
    return this.http.get<number>(this.baseUrl+'/numMascotasTratamiento');
  }

  gananciasTotales(): Observable<number> {
    return this.http.get<number>(this.baseUrl +'/gananciasTotales');
  }

  totalDrogasVendidas(): Observable<number> {
    return this.http.get<number>(this.baseUrl +'/totalDrogasVendidas');
  }

  topDrogasVendidas(): Observable<Droga[]> {
    return this.http.get<Droga[]>(this.baseUrl +'/topDrogasVendidas');
  }

  totalVeterinariosActivos(): Observable<number> {
    return this.http.get<number>(this.baseUrl +'/totalVeterinariosActivos');
  }

  totalVeterinariosInActivos(): Observable<number> {
    return this.http.get<number>(this.baseUrl +'/totalVeterinariosInActivos');
  }
}