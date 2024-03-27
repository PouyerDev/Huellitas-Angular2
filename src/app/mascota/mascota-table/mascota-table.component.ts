import { Component } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaCL } from 'src/app/model/mascota-cl';
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
  constructor(private mascotaService: MascotaService) {}
  //realizar llamados cuando ya esta cargada la interfaz

  ngOnInit(): void {
    this.mascotasList = this.mascotaService.findAll();
  }

  mostrarMascota(mascota: Mascota) {
    this.selectedMascota = mascota;
  }
  agregarMascota(mascota: Mascota) {
    this.mascotasList.push(mascota);
  }
  eliminarMascota(mascota: Mascota) {
    var index = this.mascotasList.indexOf(mascota);
    this.mascotasList.splice(index, 1);
  }

  ocultarFormulario(mostrar: boolean) {
    this.mostrarForm = false;
  }
}
