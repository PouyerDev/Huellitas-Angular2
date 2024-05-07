import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascota-table',
  templateUrl: './mascota-table.component.html',
  styleUrls: ['./mascota-table.component.css'],
})
export class MascotaTableComponent {
  // Atributos
  filtroNombre: string = '';
  selectedMascota!: Mascota;
  mascotasList!: Mascota[];
  trigger: Boolean = true;

  filtrarMascotas(): any[] {
    return this.mascotasList.filter(mascota =>
      mascota.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
  }
  // Inyectar dependencias
  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ) { }

 
  ngOnInit(): void {
    this.loadMascotas();
  }

  ngOnChanges(): void {
    this.loadMascotas();
  }

  loadMascotas(): void {
    this.mascotaService.findAll().subscribe(mascotas => {
      this.mascotasList = mascotas;
    });
  }
 
  agregarMascota(mascota: Mascota) {
    this.mascotaService.agregarMascota(mascota).subscribe(() => {
      this.loadMascotas(); // Actualizar lista de mascotas
    });
  }

  deactivateMascota(mascota: Mascota) {
    console.log('Desactivando mascota:', mascota);
    this.mascotaService.deactivateMascota(mascota.id).subscribe(() => {
      this.loadMascotas();
      console.log('Mascota desactivada:', mascota);
    });
    this.trigger = !this.trigger;
  }
}
