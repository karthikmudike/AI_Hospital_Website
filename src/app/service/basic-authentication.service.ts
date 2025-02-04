import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constant';
import { Router } from '@angular/router';

export const TOKEN = 'token';
export const AUTHENTICATION = 'authenticaion';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient, private route: Router) {}

  executeJWTAuthentication(username: string, password: string) {
    this.setHeader(username, password);

    return this.http
      .post<any>(`${API_URL}/jpa/authenticate`, { username, password })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATION, username);
          this.username = username;
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data;
        })
      );
  }

  private username: any;

  setHeader(username: any, password: any) {
    this.username = username;
  }

  getUsername() {
    return sessionStorage.getItem('authenticaion');
  }

  getHeader() {
    return sessionStorage.getItem(TOKEN);
  }
  
  isUserLoggedIn(): boolean {
    let name = sessionStorage.getItem(AUTHENTICATION);
    if (name == null) {
      return false;
    } else {
      return true;
    }
  }

  loggedOut(): void {
    this.route.navigate(['/logout']);
    sessionStorage.removeItem(AUTHENTICATION);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem("ADMIN");
    sessionStorage.removeItem("PatientNumber");
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
