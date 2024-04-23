import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  change: boolean = false;

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfSession();
    });
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
}
