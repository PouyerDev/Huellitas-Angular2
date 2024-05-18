import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sequenceMatched = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  change: boolean = false;

  ngOnInit(): void {
 
  }

  checkIfSession(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (!user && !this.isLoginPageOrLanding()) {
        this.router.navigate(['/landing']);
      }
      this.change = !this.change;
    });
  }

  isLoginPageOrLanding(): boolean {
    return this.router.url === '/login' || this.router.url === '/landing' || this.router.url === '/';
  }
   // Agregar la detección de la secuencia de teclas
 private sequence: string[] = []; 
 private secretSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']; 

 @HostListener('document:keydown', ['$event'])
 handleKeyboardEvent(event: KeyboardEvent) {
   this.sequence.push(event.code);
   this.sequence = this.sequence.slice(-this.secretSequence.length);

   if (this.sequence.join('') === this.secretSequence.join('')) {
     console.log('Secuencia secreta ingresada!');
     // Realizar la acción deseada aquí, por ejemplo:
     //this.scrollTo('seccion-secreta');
     this.sequenceMatched = true;
     window.location.href = 'https://youtu.be/dQw4w9WgXcQ';

     // O puedes llamar a cualquier otra función que desees ejecutar cuando se ingrese la secuencia secreta.
   }
 }
}
