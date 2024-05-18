import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentUser: Observable<string> = this.currentUserSubject.asObservable();

  private currentUserSubjectCedula: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentUserCedula: Observable<string> = this.currentUserSubjectCedula.asObservable();

  constructor() {
    const userTypeFromLocalStorage = localStorage.getItem('userType');
    if (userTypeFromLocalStorage) {
      this.currentUserSubject.next(userTypeFromLocalStorage);
    }

    

    const cedulaFromLocalStorage = localStorage.getItem('cedula');
    if (cedulaFromLocalStorage) {
      this.currentUserSubjectCedula.next(cedulaFromLocalStorage);
    }
  }

  setCurrentUser(user: string): void {
    this.currentUserSubject.next(user);
    localStorage.setItem('userType', user.toString());
  }

  getCurrentUser(): Observable<string> {
    return this.currentUser;
  }

  getCurrentUserCedula(): Observable<string> {
    return this.currentUserCedula;
  }

  setCurrentUserCedula(cedula: string): void {
    this.currentUserSubjectCedula.next(cedula);
    localStorage.setItem('cedula', cedula);
  }

  // Métodos para manejar la sesión del usuario
  setSessionData(sessionData: any): void {
    localStorage.setItem('token', JSON.stringify(sessionData));
  }

  getSessionData(): any {
    const sessionData = localStorage.getItem('token');
    return sessionData ? JSON.parse(sessionData) : null;
  }

  clearSessionData(): void {
    localStorage.removeItem('token');
  }
}