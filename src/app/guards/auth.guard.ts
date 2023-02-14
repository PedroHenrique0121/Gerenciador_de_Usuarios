import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../usuarios/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private toastService: ToastrService
  ) {

  }

  canActivate(): boolean {
    const authenticated = this.authService.isAuthenticated();

    if (authenticated) {

      return true;
    }
    else {
      this.toastService.info("Sua seção expirou, faça o login novamnete para acessar o sistema!","Aviso")
      this.router.navigate(["/login"])
      return false;
    }

  }

}

