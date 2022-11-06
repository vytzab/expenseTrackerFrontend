import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private authenticationService : AuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authHeaderString = this.authenticationService.getAuthenticatedToken();
    let username = this.authenticationService.getAuthenticatedUser();

    if (authHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization : authHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
