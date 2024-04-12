import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascota-table',
  templateUrl: './mascota-table.component.html',
  styleUrls: ['./mascota-table.component.css'],
})
export class MascotaTableComponent {
  //atributos
  mostrarForm: boolean = false;
  selectedMascota!: Mascota;
  mascotasList!: Mascota[];
  //inyectar dependencias
  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ) { }
  //realizar llamados cuando ya esta cargada la interfaz

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe(mascotas => {
      // Filter mascotas with estado = true
      this.mascotasList = mascotas.filter(mascota => mascota.estado);
    });
  }
 
  agregarMascota(mascota: Mascota) {
    this.mascotaService.agregarMascota(mascota).subscribe(() => {
      this.mascotasList.push(mascota);
    });
  }

  deactivateMascota(mascota: Mascota) {
    console.log('Desactivando mascota:', mascota);
    this.mascotaService.deactivateMascota(mascota.id).subscribe(() => {
      this.mascotasList = this.mascotasList.filter(m => m !== mascota);
      this.router.navigate(['/mascotas']);
    });
  }
  

  ocultarFormulario(mostrar: boolean) {
    this.mostrarForm = false;
  }
}
