import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Mascota } from 'src/app/model/mascota';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {
  @Input() cliente!: Cliente;
  mascota!: Mascota;
  rol: string = '';
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadMascotas();
    this.authService.getCurrentUser().subscribe(rol => {
      this.rol = rol.toString();
    });
  }

  loadMascotas(): void {
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

  activate(mascotaId: string): void {
    console.log('Activando mascota:', mascotaId, 'del cliente:', this.cliente);
    this.clienteService.activateMascota(mascotaId, this.cliente.id).subscribe(() => {    
    });
    this.loadMascotas();  
  }
}
