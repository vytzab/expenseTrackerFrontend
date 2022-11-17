import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient) { }

  executeAuthenticationService(email: string, password: string) {

    return this.http.post<AuthenticationBean>(`${API_URL}/login`, {
      email: email,
      password: password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, email);
          // console.log('email= ' + email)
          sessionStorage.setItem(TOKEN, `Bearer ${data.jwtToken}`);
          // console.log('token= ' + data.jwtToken)
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN)
    } else {
      return null
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export const TOKEN = 'Authorization'
export const AUTHENTICATED_USER = 'authenticatedUser'

export class AuthenticationBean {
  constructor(
    public jwtToken: string) { }
}
