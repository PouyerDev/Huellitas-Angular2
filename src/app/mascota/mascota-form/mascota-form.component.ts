import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from 'src/app/model/mascota';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent implements OnInit {
  mascota: Mascota = {
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    foto: '',
    estado: true,
    id: ''  
  };
  cedulaCliente: number | undefined;
  clienteNoExiste: boolean = false; // Variable para controlar si el cliente no exis
  cliente: Cliente | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mascotaService.findById(id).subscribe(
        (mascota) => {
          if (mascota) {
            this.mascota = mascota;

          } else {
            console.log('La mascota no existe');
            this.router.navigate(['/'])
          }
        },
        (error) => {
          console.error('Error al obtener la mascota:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.cedulaCliente) {
      this.validarCliente(this.cedulaCliente);
    } else {
      console.error('Por favor ingresa la cedula del cliente.');
    }
  }

  validarCliente(cedula: number): void {
    this.clienteService.getClienteByCedula(cedula.toString()).subscribe(
      (cliente) => {
        if (cliente) {
          this.cliente = cliente;
          this.crearMascota();
        } else {
          console.error('El cliente no existe.');
          this.clienteNoExiste = true; // Establecer clienteNoExiste en true si el cliente no existe
        }
      },
      (error) => {
        console.error('Error al obtener el cliente:', error);
      }
    );
  }

  crearMascota(): void {
    console.log('Creando mascota:', this.mascota);
    this.mascota.cliente = this.cliente;
    this.mascotaService.agregarMascota(this.mascota).subscribe(
      () => {
        // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
        console.log('Mascota creada exitosamente.');
        // Redirigir a la lista de mascotas
        this.router.navigate(['/mascotas']);
      },
      (error) => {
        console.error('Error al crear la mascota:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error
      }
    );
  }

  
  
  
}
