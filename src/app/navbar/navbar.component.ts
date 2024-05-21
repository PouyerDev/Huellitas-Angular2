import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userType: string = '';
  reloadTrigger$ = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.userType = user.toString();
    });
  }

  reload(): void {
    this.reloadTrigger$.next(true);
  }

  ngOnChanges(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.userType = user.toString();
    });
  }

  logOut(): void {
    this.authService.setCurrentUser('');
    this.authService.clearSessionData();
  }

  changeTheme(newTheme: string){
    console.log(newTheme);
    this.themeService.setThemeByName(newTheme);
  }
}
