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
        // Obtener el userType almacenado en localStorage cuando se inicia el servicio
        const userTypeFromLocalStorage = localStorage.getItem('userType');
        if (userTypeFromLocalStorage) {
            this.currentUserSubject.next(userTypeFromLocalStorage);
        }
    }

    setCurrentUser(user: string): void {
        this.currentUserSubject.next(user);
        localStorage.setItem('userType', user.toString());
    }

    getCurrentUser(): Observable<string> {
        if (this.currentUserSubject.value !== '') {
            return this.currentUser;
        } else {
            const userTypeFromLocalStorage = localStorage.getItem('userType');
            return userTypeFromLocalStorage ? of(userTypeFromLocalStorage) : of('');
        }
    }

    getCurrentUserCedula(): string {
        // Recuperar la cedula desde localStorage
        return localStorage.getItem('cedula') || '';
    }

    setCurrentUserCedula(cedula: string): void {
        // Guardar la cedula en localStorage
        localStorage.setItem('cedula', cedula);
        this.currentUserSubjectCedula.next(cedula);
    }

    // Métodos para manejar la sesión del usuario
    setSessionData(sessionData: any): void {
        // Guardar los datos de sesión en localStorage
        localStorage.setItem('sessionData', JSON.stringify(sessionData));
    }

    getSessionData(): any {
        // Recuperar los datos de sesión desde localStorage
        const sessionData = localStorage.getItem('sessionData');
        return sessionData ? JSON.parse(sessionData) : null;
    }

    clearSessionData(): void {
        // Limpiar los datos de sesión de localStorage
        localStorage.removeItem('sessionData');
    }
    
}
