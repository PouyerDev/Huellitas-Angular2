import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private currentUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    currentUser: Observable<string> = this.currentUserSubject.asObservable();
    private currentUserSubjectCedula: BehaviorSubject<string> = new BehaviorSubject<string>('');
    currentUserCedula: Observable<string> = this.currentUserSubjectCedula.asObservable();
    
    constructor(
       
    ) { }

    setCurrentUser(user: string): void {
        this.currentUserSubject.next('dev');
    }

    getCurrentUser(): Observable<string> {
        return this.currentUser;
    }
    getCurrentUserCedula(): string {
        return this.currentUserCedula.toString();
    }
    setCurrentUserCedula(cedula: string): void {
        this.currentUserSubject.next(cedula);
    }
}
