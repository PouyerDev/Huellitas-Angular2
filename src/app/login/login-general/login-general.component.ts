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
    private clienteService: ClienteService,
    private authService: AuthService
  ) {
    this.checkIfSession();
  }

  ngOnChanges(): void {
    this.checkIfSession();
  }

  login(): void {
    if (this.cedula === "9999") {
      this.auth.setCurrentUser('dev');
      this.router.navigate(['/mascotas']); 
    } else {
      if (this.cedula === "0000") {
        // Redirigir al administrador a su página correspondiente
        this.auth.setCurrentUser('admin');
        this.router.navigate(['/dashboard']); 
      } else {
        // Verificar si la cedula ingresada corresponde a un veterinario existente
        this.veterinarioService.obtenerPorCedula(this.cedula).subscribe(
          (veterinario) => {
            if (veterinario) {
              if (!veterinario.estado) {
                // El veterinario está desactivado, no se le permite iniciar sesión
                console.log('El veterinario está desactivado. No se puede iniciar sesión.');
                // Puedes mostrar un mensaje de error o redirigir a una página de error
                // Por ejemplo:
                this.mostrarMensajeError('El veterinario está desactivado');
              } else {
                // El veterinario está activo, se le permite iniciar sesión
                this.auth.setCurrentUser('veterinario');
                this.router.navigate(['/clientes']);
              }
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
                    this.mostrarMensajeError('El usuario no existe');
                  }
                },
                (error) => {
                  console.error('Error al verificar el cliente:', error);
                  this.mostrarMensajeError('El usuario no existe');
                }
              );
            }
          },
          (error) => {
            console.error('Error al verificar el veterinario:', error);
            this.mostrarMensajeError('El usuario no existe');
          }
        );
      }
    }
  }

  mostrarMensajeError(mensaje : string): void {
    // Mostrar un mensaje de error al usuario
    alert(mensaje);
  }

  checkIfSession(): void {
    this.authService.getCurrentUser().subscribe(currentUser => {
      if (currentUser) {
        // Si hay un usuario en sesión, redirigir a la página correspondiente
        // según el tipo de usuario
        switch (currentUser) {
          case 'dev':
            this.router.navigate(['/mascotas']);
            break;
          case 'admin':
            this.router.navigate(['/dashboard']);
            break;
          case 'veterinario':
            this.router.navigate(['/clientes']);
            break;
          case 'cliente':
            break;
          default:
            // Si el tipo de usuario no coincide con ninguno de los casos anteriores,
            // redirigir a la página de inicio de sesión
            this.router.navigate(['/login']);
            break;
        }
      } else {
        // Si no hay un usuario en sesión, redirigir a la página de inicio de sesión
        this.router.navigate(['/login']);
      }
    });
  }
}
