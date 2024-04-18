import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
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
    private auth: AuthService,
    private router: Router,
    private veterinarioService: VeterinarioService,
    private clienteService: ClienteService) { }

  login(): void {
    if (this.cedula === "9999") {
      this.auth.setCurrentUser('dev');
      this.router.navigate(['/mascotas']); 
    } else{
      if (this.cedula === "0000") {
        // Redirigir al administrador a su página correspondiente
        this.auth.setCurrentUser('admin');
        this.router.navigate(['/dashboard']); 
      } else {
        // Verificar si la cedula ingresada corresponde a un veterinario existente
        this.veterinarioService.obtenerPorCedula(this.cedula).subscribe(
          (veterinario) => {
            if (veterinario) {
              // Redirigir al veterinario a su página correspondiente
              this.auth.setCurrentUser('veterinario');
              this.router.navigate(['/clientes']); 
            } else {
              // Si el veterinario no existe, buscar en el servicio de cliente
              this.clienteService.getClienteByCedula(this.cedula).subscribe(
                (cliente) => {
                  if (cliente) {
                    // Redirigir al cliente a su página correspondiente
                    this.auth.setCurrentUser('cliente');
                    this.router.navigate(['/cliente/cliente-detail/' + cliente.id]);
                  } else {
                    // Si no se encuentra ningún usuario, mostrar un mensaje de error
                    this.mostrarMensajeError();
                  }
                },
                (error) => {
                  console.error('Error al verificar el cliente:', error);
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
  }

  mostrarMensajeError(): void {
    // Mostrar un mensaje de error al usuario
    alert('El usuario no existe');
  }

}
