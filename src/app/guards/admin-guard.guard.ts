import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
    private toastService: ToastrService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let status =this.verificarAutorizacaoAdmin();
    if(status){
         return status;
    }else{
      this.toastService.error("Este usuario não tem permissão para acessar o sistema!", "Acesso negado!")
        return false;
    }
    

  }

  verificarAutorizacaoAdmin(){
    let retorno= false
    let roles= this.authService.getRoles();
    if (roles) {
      for (let role of roles) {
        if (role === environment.permissaoAdmin) {
          retorno = true;
        }
      }
    } else {
      retorno = false;
    }
    return retorno;
  }
  
}
