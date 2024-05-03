import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.css'] // Update the file path to the correct location of the CSS file
})
export class DashboardGeneralComponent implements OnInit {
  numMascotas: number = 0;
  numMascotasTratamiento: number = 0;
  gananciasTotales: number = 0;
  totalDrogasVendidas: number = 0;
  topDrogasVendidas: any[] = [];
  totalVeterinariosActivos: number = 0;
  totalVeterinariosInActivos: number = 0;
  totalTratamientosUltimoMes : number = 0;
  tratamientosPorDrogaUltimoMes : any[] = [];

  constructor(
    private DashboardService: DashboardService) { }

  ngOnInit(): void {
    this.DashboardService.numMascotas().subscribe(numMascotas => {
      this.numMascotas = numMascotas;
    });

    this.DashboardService.numMascotasTratamiento().subscribe(numMascotasTratamiento => {
      this.numMascotasTratamiento = numMascotasTratamiento;
    });

    this.DashboardService.gananciasTotales().subscribe(gananciasTotales => {
      this.gananciasTotales = gananciasTotales;
    });

    this.DashboardService.totalDrogasVendidas().subscribe(totalDrogasVendidas => {
      this.totalDrogasVendidas = totalDrogasVendidas;
    });

    this.DashboardService.topDrogasVendidas().subscribe(topDrogasVendidas => {
      this.topDrogasVendidas = topDrogasVendidas;
    });

    this.DashboardService.totalVeterinariosActivos().subscribe(totalVeterinariosActivos => {
      this.totalVeterinariosActivos = totalVeterinariosActivos;
    });

    this.DashboardService.totalVeterinariosInActivos().subscribe(totalVeterinariosInActivos => {
      this.totalVeterinariosInActivos = totalVeterinariosInActivos;
    });
  }
}