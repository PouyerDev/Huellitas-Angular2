import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-login-general',
  templateUrl: './login-general.component.html',
  styleUrls: ['./login-general.component.css']
})
export class LoginGeneralComponent {
  @Output() loginUser = new EventEmitter<string>();

  cedula: string = '';

  constructor(
    private router: Router,  
    private veterinarioService: VeterinarioService, 
    private clienteService: ClienteService) {}

  login(): void {
    if (this.cedula === "0000") {
      // Redirigir al administrador a su página correspondiente
    
      this.router.navigate(['/veterinarios']); // Aquí debería ser /veterinarios para el admin, ¿no?
    } else {
      // Verificar si la cedula ingresada corresponde a un veterinario existente
      this.veterinarioService.obtenerPorCedula(this.cedula).subscribe(
        (veterinario) => {
          if (veterinario) {
            // Redirigir al veterinario a su página correspondiente
          
            this.router.navigate(['/clientes']); // ¿Debería ser /mascotas para el veterinario?
          } else {
            // Si el veterinario no existe, buscar en el servicio de cliente
            this.clienteService.getClienteByCedula(this.cedula).subscribe(
              (cliente) => {
                if (cliente) {
                  // Redirigir al cliente a su página correspondiente
                 
                  this.router.navigate(['/cliente/cliente-detail/'+cliente.id]);
                } else {
                  // Si no se encuentra ningún usuario, mostrar un mensaje de error
                  this.mostrarMensajeError();
                }
              },
              (error) => {
                console.error('Error al verificar el cliente:', error);
                this.router.navigate(['/clientes']);
                this.mostrarMensajeError();
              }
            );
          }
        },
        (error) => {
          console.error('Error al verificar el veterinario:', error);
          this.mostrarMensajeError();
        }
      );
    }
  }

  mostrarMensajeError(): void {
    // Mostrar un mensaje de error al usuario
    alert('El usuario no existe');
  }

}
