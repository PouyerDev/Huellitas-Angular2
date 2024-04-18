import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/service/droga.service';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.css'],
})
export class DashboardGeneralComponent implements OnInit {
  numMascotas: number = 0;
  totalMascotasTratamiento: number = 0;
  gananciasTotales: number = 0;
  totalDrogasVendidas: number = 0;
  topDrogasVendidas: Droga[] = [];
  totalTratamientosUltimoMes: number = 0;
  tratamientosPorDrogaUltimoMes: { droga: string; cantidad: number }[] = [];
  totalVeterinariosActivos: number = 0;
  totalVeterinariosInActivos: number = 0;

  constructor(
    private mascotaService: MascotaService,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService,
    private veterinarioService: VeterinarioService
  ) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.numMascotas = mascotas.length;
      this.totalMascotasTratamiento = mascotas.filter((mascota) => mascota.estado).length;
    });

    this.drogaService.findAll().subscribe((drogas) => {
      this.gananciasTotales = drogas.reduce(
        (total, droga) => total + droga.precioVenta * droga.unidadesVendidas,
        0
      );
      this.totalDrogasVendidas = drogas.reduce((total, droga) => total + droga.unidadesVendidas, 0);
      this.topDrogasVendidas = drogas.sort((a, b) => b.unidadesVendidas - a.unidadesVendidas).slice(0, 3);
    });

    this.tratamientoService.findAll().subscribe((tratamientos) => {
      const unMesAtras = new Date();
      unMesAtras.setMonth(unMesAtras.getMonth() - 1);

      this.totalTratamientosUltimoMes = tratamientos.filter(
        (tratamiento) => new Date(tratamiento.fechaInicio) >= unMesAtras
      ).length;

      const tratamientosUltimoMes = tratamientos.filter(
        (tratamiento) => new Date(tratamiento.fechaInicio) >= unMesAtras
      );

      const drogas = [...new Set(tratamientosUltimoMes.map((tratamiento) => tratamiento.droga?.nombre))];

      this.tratamientosPorDrogaUltimoMes = drogas.map((nombreDroga) => {
        return {
          droga: nombreDroga || 'Desconocido',
          cantidad: tratamientosUltimoMes.filter((tratamiento) => tratamiento.droga?.nombre === nombreDroga).length,
        };
      });
    });

    this.veterinarioService.getAllVeterinarios().subscribe((veterinarios) => {
      this.totalVeterinariosActivos = veterinarios.filter((veterinario) => veterinario.estado).length;
      this.totalVeterinariosInActivos = veterinarios.filter((veterinario) => !veterinario.estado).length;
    });
  }
}
