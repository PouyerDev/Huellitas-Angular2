import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = {
    id: '',
    nombre: '',
    cedula: '',
    correo: '',
    celular: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    console.log('ClienteFormComponent');
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getClienteById(id).subscribe(
        (cliente) => {
          if (cliente) {
            this.cliente = cliente;
          } else {
            console.log('El cliente no existe');
            // Redirigir a una página de error o a otra ubicación deseada
            this.router.navigate(['/']); // Por ejemplo, redirige a la página principal
          }
        },
        (error) => {
          console.error('Error al obtener el cliente:', error);
        }
      );
    }
  }

  onSubmit(): void {
    //verificar campos
    if (!this.cliente.nombre || !this.cliente.cedula || !this.cliente.correo || !this.cliente.celular) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos obligatorios.'
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.cliente.correo)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingresa un correo electrónico válido.'
      });
      return; 
    }

    if (this.cliente.id) {
      console.log('Actualizando cliente:', this.cliente);
      this.clienteService.actualizarCliente(this.cliente).subscribe(
        () => {
          console.log('Cliente actualizado exitosamente.');
          // Redirigir al detalle del cliente
          this.router.navigate(['/cliente/cliente-detail/'+ this.cliente.id]);
        },
        (error) => {
          console.error('Error al actualizar el cliente:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    } else {
      console.log('Creando cliente:', this.cliente);  
      this.clienteService.crearCliente(this.cliente).subscribe(
        () => {
          // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
          console.log('Cliente creado exitosamente.');
          // Redirigir a la lista de clientes
          this.router.navigate(['/clientes']);
        },
        (error) => {
          console.error('Error al crear el cliente:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    }
  }
}
