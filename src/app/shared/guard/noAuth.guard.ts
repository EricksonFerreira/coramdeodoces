import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/shared/auth.service';
@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard {
  constructor(public authService: AuthService, public router: Router,private location: Location) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn == true) {
      window.alert('Você já está logado!');
      this.location.back();
    }
    return true;
  }
}
