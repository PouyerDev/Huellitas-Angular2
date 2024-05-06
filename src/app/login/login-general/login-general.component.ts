import { Component, EventEmitter, Optional, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-general',
  templateUrl: './login-general.component.html',
  styleUrls: ['./login-general.component.css']
})
export class LoginGeneralComponent {
  @Output() loginUser = new EventEmitter<string>();

  cedula: string = '';
  password: string | undefined = '';

  showPassword: boolean = false;
  selectedTab: string = 'cliente'; // Tab por defecto seleccionada


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

  loginSimple() {
    // Si el veterinario no existe, buscar en el servicio de cliente
    this.clienteService.getClienteByCedula(this.cedula).subscribe(
      (cliente) => {
        if (cliente) {
          // Redirigir al cliente a su página correspondiente
          this.auth.setCurrentUser('cliente');
          this.auth.setCurrentUserCedula(this.cedula);
          this.router.navigate(['/cliente/cliente-detail/' + cliente.id]);
        } else {
          // Si no se encuentra ningún usuario, mostrar un mensaje de error
          this.mostrarMensajeError('El cliente no existe');
        }
      },
      (error) => {
        console.error('Error al verificar el cliente:', error);
        this.mostrarMensajeError('El cliente no existe');
      }
    );

  }

  loginPassword() {
    if (!this.password) {
      this.mostrarMensajeError('Por favor, ingrese su contraseña');
      return;
    }
    else {
      if (this.cedula == "0000" && this.password === "admin") {
        // Redirigir al administrador a su página correspondiente
        this.auth.setCurrentUser('admin');
        this.auth.setCurrentUserCedula(this.cedula);
        this.router.navigate(['/dashboard']);
      } else {
        // Verificar si la cedula ingresada corresponde a un veterinario existente
        this.veterinarioService.obtenerPorCedula(this.cedula).subscribe(
          (veterinario) => {
            if (veterinario) {
              this.veterinarioService.checkPassword(this.cedula, this.password!)
                .subscribe(
                  (response) => {
                    if (response) {
                      // La contraseña es correcta y se recibió una respuesta del servidor
                      if (!veterinario.estado) {
                        console.log('El veterinario está desactivado. No se puede iniciar sesión.');
                        this.mostrarMensajeError('El veterinario está desactivado');
                      } else {
                        // El veterinario está activo, se le permite iniciar sesión
                        this.auth.setCurrentUser('veterinario');
                        this.auth.setCurrentUserCedula(this.cedula);
                        this.router.navigate(['/clientes']);
                      }
                    } else {
                      // No se recibió respuesta del servidor, la contraseña es incorrecta
                      this.mostrarMensajeError('Contraseña incorrecta');
                    }
                  },
                  (error) => {
                    // Manejar otros errores, como errores de red, etc.
                    this.mostrarMensajeError('Error al verificar la contraseña');
                  }
                );

            } else {
              this.mostrarMensajeError('El veterinario no existe');
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


  login(): void {
    if (this.cedula === '') {
      this.mostrarMensajeError('Por favor, ingrese su cédula');
    } else {
      if (this.cedula.toString() === "9999") {
        this.auth.setCurrentUser('dev');
        this.auth.setCurrentUserCedula(this.cedula);
        this.router.navigate(['/mascotas']);
      } else {
        if (this.selectedTab === 'cliente') {
          this.loginSimple();
        } else {
          this.loginPassword();
        }
      }
    }
  }

  mostrarMensajeError(mensaje: string): void {
    // Mostrar un mensaje de error al usuario
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje
    });
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

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    // Restablecer los valores de los campos de inicio de sesión al cambiar de pestaña
    this.cedula = '';
    this.password = '';
    this.showPassword = false;
  }
}
