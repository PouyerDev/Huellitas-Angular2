import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuevo';
  userType = ''; // Tipo de usuario inicialmente vacío

  constructor(
    private router: Router)  
  {}

  onLogin(userType: string): void {
    this.userType = userType; // Actualizar el tipo de usuario después del inicio de sesión
  }

  cerrarSesion(): void {
    this.userType = ''; // Restablecer el tipo de usuario al cerrar la sesión
    this.router.navigate(['/landing']); // Redirigir al usuario a la página de inicio de sesión
  }

}