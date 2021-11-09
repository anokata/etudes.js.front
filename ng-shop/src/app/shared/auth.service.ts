import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(User: any) {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        User
      )
      .pipe(tap(this.setToken));
  }

  private setToken(response: any) {
    if (response) {
      const expireDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      localStorage.setItem('firebase-token-exp', expireDate.toString());
      localStorage.setItem('firebase-token', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  get token() {
    const expireDate = new Date(
      localStorage.getItem('firebase-token-exp') || ''
    );
    if (new Date() > expireDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('firebase-token');
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated() {
    return !!this.token;
  }
}
