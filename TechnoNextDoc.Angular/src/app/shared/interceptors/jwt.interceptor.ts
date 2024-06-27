import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../api-services/users/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private userService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let token = this.userService.getToken();
    let token = ''

    if (token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
