import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';
import { MascotaService } from 'src/app/service/mascota.service';
import { mergeMap } from 'rxjs';
import { Mascota } from 'src/app/mascota/mascota';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {
  @Input() 
  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.clienteService.getClienteById(id).pipe(
        mergeMap(
          (clienteInfo) => {
            this.cliente = clienteInfo;
            return this.clienteService.getMascotasByClienteId(id);
          }
        )
      ).subscribe(
        (mascotas) => {
          this.cliente.mascotas = mascotas.map(mascota => this.convertirAMascota(mascota));
        }
      )
      });
  }


  convertirAMascota(data: any): Mascota {
    // Realiza la conversión de datos según la estructura del modelo de Mascota
    return {
      nombre: data.nombre || '',
      raza: data.raza || '',
      edad: data.edad || 0,
      peso: data.peso || 0,
      enfermedad: data.enfermedad || '',
      foto: data.foto || '',
      estado: data.estado || false,
      id: data.id || 0
    };
  }

}
