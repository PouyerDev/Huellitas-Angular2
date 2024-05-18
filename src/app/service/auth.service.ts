import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');

    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      })
      return next.handle(cloned);
    }
    return next.handle(request);
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
    localStorage.setItem('sessionData', JSON.stringify(sessionData));
  }

  getSessionData(): any {
    const sessionData = localStorage.getItem('sessionData');
    return sessionData ? JSON.parse(sessionData) : null;
  }

  clearSessionData(): void {
    localStorage.removeItem('sessionData');
    localStorage.removeItem('token');
  }
}