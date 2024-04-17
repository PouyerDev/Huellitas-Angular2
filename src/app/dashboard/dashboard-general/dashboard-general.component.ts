import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { Droga } from 'src/app/model/droga'; // Importa el modelo Droga
import { DrogaService } from 'src/app/service/droga.service'; // Importa el servicio Droga
import { Tratamiento } from 'src/app/model/tratamiento'; // Importa el modelo Tratamiento
import { TratamientoService } from 'src/app/service/tratamiento.service'; // Importa el servicio Tratamiento
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.css'],
})
export class DashboardGeneralComponent {
  //atributos
  selectedMascota!: Mascota;
  mascotasList!: Mascota[];
  numMascotas!: number;
  totalMascotasTratamiento!: number;
  gananciasTotales!: number;
  totalDrogasVendidas!: number;
  topDrogasVendidas!: Droga[];
  totalTratamientosUltimoMes!: number;
  tratamientosPorDrogaUltimoMes!: { droga: string; cantidad: number }[]; // Nueva propiedad
  //inyectar dependencias
  constructor(
    private mascotaService2: MascotaService,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService, // Nueva dependencia
    private router: Router
  ) {}
  //realizar llamados cuando ya esta cargada la interfaz

  ngOnInit(): void {
    this.mascotaService2.findAll().subscribe((mascotas) => {
      this.mascotasList = mascotas;
      this.numMascotas = this.mascotasList.length;
      this.totalMascotasTratamiento = this.mascotasList.filter(
        (mascota) => mascota.estado
      ).length;
    });

    this.drogaService.findAll().subscribe((drogas) => {
      this.gananciasTotales = drogas.reduce(
        (total, droga) => total + droga.precioVenta * droga.unidadesVendidas,
        0
      );
      this.totalDrogasVendidas = drogas.reduce(
        (total, droga) => total + droga.unidadesVendidas,
        0
      );
      this.topDrogasVendidas = drogas
        .sort((a, b) => b.unidadesVendidas - a.unidadesVendidas)
        .slice(0, 3);
    });

    this.tratamientoService.findAll().subscribe((tratamientos) => {
      const unMesAtras = new Date();
      unMesAtras.setMonth(unMesAtras.getMonth() - 1);
      this.totalTratamientosUltimoMes = tratamientos.filter(
        (tratamiento) => new Date(tratamiento.fechaInicio) >= unMesAtras
      ).length;

      // Nuevas líneas
      const tratamientosUltimoMes = tratamientos.filter(
        (tratamiento) => new Date(tratamiento.fechaInicio) >= unMesAtras
      );
      const drogas = [
        ...new Set(
          tratamientosUltimoMes.map((tratamiento) => tratamiento.droga?.id)
        ),
      ];
      this.tratamientosPorDrogaUltimoMes = drogas.map((drogaId) => {
        const droga = tratamientosUltimoMes.find(
          (tratamiento) => tratamiento.droga?.id === drogaId
        )?.droga;
        return {
          droga: droga ? droga.nombre : 'Desconocido',
          cantidad: tratamientosUltimoMes.filter(
            (tratamiento) => tratamiento.droga?.id === drogaId
          ).length,
        };
      });
    });
  }

  //metodos
  //contar todas las mascotas
  countMascotas() {
    this.mascotaService2.findAll().subscribe((mascotas) => {
      this.numMascotas = this.mascotasList.length;
      this.totalMascotasTratamiento = this.mascotasList.filter(
        (mascota) => mascota.estado
      ).length;
    });
  }
}
