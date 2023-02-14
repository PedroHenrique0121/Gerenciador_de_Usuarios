import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminGuardGuard } from 'src/app/guards/admin-guard.guard';
import { AuthService } from 'src/app/services/auth.service';

import { Usuario } from './Usuario';

export interface DialogData {
  
  refresh: boolean,
 
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  formulario!:FormGroup;
  hide =true;
  error = ""
  usuario !: Usuario;
  permissao!: boolean;
 
  constructor(private authService: AuthService,
    private router: Router,
    private adminGuard: AdminGuardGuard,
    private dialog: MatDialog,
    private toastService: ToastrService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: DialogData
   ) { 
      this.usuario = new Usuario()
      this.permissao= true;

    }


  ngOnInit(): void {
    this.formulario = new FormGroup({
      login: new FormControl('', [Validators.required,]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  get login(){
     return this.formulario.get("login")
  }

  get senha(){
    return this.formulario.get("senha")
 }

 tentarLogar(){
    this.authService.tentarLogar(this.usuario.login, this.usuario.senha)
    .subscribe(response=>{
      const access_token = JSON.stringify(response.access_token);
      localStorage.setItem("access_token", access_token);
      
     
      this.permissao= this.adminGuard.verificarAutorizacaoAdmin();
    
      if(this.data?.refresh && this.permissao){
         this.dialog.closeAll()
      }else{
        this.router.navigate(['/usuarios'])
      }
    },errorResponse=>{
       
        this.error = errorResponse?.error?.error_description;
        this.toastService.error(this.error)
       
    })
 }


}
