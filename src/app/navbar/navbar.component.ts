import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userType : string = '';

  constructor( 
    private authService : AuthService,
    private httpClient: HttpClient
  ) {
   }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.userType = user;
    });
  }

  logOut(){
    this.authService.setCurrentUser('');
  }
}
