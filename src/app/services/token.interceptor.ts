import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

// BOOKMARK token.interceptor.ts
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  publicRoutes: string[];

  constructor(public apiService: ApiService) {
    this.publicRoutes = [
      'api/v1/user/create',
      'api/v1/user/login',
      'api/v1/user/register',
    ];
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const path = request.urlWithParams.replace(`${this.apiService.environment.apiUrl}/`, '');
    if (!this.publicRoutes.includes(path)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.apiService.token}`
        }
      });
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
