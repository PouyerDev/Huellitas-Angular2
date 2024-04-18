import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private currentUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    currentUser: Observable<string> = this.currentUserSubject.asObservable();

    constructor(
       
    ) { }

    setCurrentUser(user: string): void {
        this.currentUserSubject.next(user);
    }

    getCurrentUser(): Observable<string> {
        return this.currentUser;
    }
}
