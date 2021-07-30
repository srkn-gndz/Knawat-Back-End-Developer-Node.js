import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ApiService } from './api.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(public apiService: ApiService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.apiService.is_user_logged()) {
      return true;
    } else {
      this.apiService.router.navigate(['/register']);
      return true;
    }
  }
}
