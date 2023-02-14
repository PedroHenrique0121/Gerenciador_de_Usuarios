import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private authGuard: AuthGuard) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const url = request.url;
    
   
    const tokenString = localStorage.getItem("access_token")
    if (tokenString && !url.includes("/oauth/token") ) {
      this.authGuard.canActivate()
      const token = JSON.parse(tokenString);
      const jwt = token;

      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + jwt
        }
      })

    }
    return next.handle(request);
  }
}
