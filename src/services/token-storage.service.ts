import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  
private loggedUserSubscriber: Subscriber<string>;

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  getUserObservable(): Observable<string> {
    return new Observable(subscriber => {
        this.loggedUserSubscriber = subscriber;
        subscriber.next(this.getUser());
    });
}

}