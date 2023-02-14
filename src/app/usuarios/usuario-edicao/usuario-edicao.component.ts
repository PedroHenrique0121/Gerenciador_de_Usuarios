import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from '../login/Usuario';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


export type U={
   usuario: Usuario;
}
@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-edicao.component.html',
  styleUrls: ['./usuario-edicao.component.css']
})
export class UsuarioEdicaoComponent implements OnInit {

  formulario!: FormGroup;
  hide = true;
  error = false
  usuario !: Usuario;
  constructor(private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioService,
    private toastService: ToastrService,
    private location: Location,
   ) {
    this.usuario = new Usuario()
     
  }


  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl('', ),
      login: new FormControl('', [Validators.required,]),
      nome: new FormControl('', [Validators.required,]),
      senha: new FormControl('', [Validators.required]),
    });

    this.verificarNavgacao();
    this.id?.disable()
  }

  get id() {
    return this.formulario.get("id")
  }
  get login() {
    return this.formulario.get("login")
  }

  get nome() {
    return this.formulario.get("nome")
  }

  get senha() {
    return this.formulario.get("senha")
  }

  verificarNavgacao(){
    this.usuario = new Usuario();
    const state= this.location.getState()as U;
    if(state.usuario!=null){
    this.usuario= state.usuario;
    }else{
      this.toastService.error("Não foi possivel renderizar a pagina!")
      this.router.navigate(["/usuarios"])
    }
  }

  editar() {
    this.usuarioService.editar(this.usuario)
      .subscribe(response => {
        this.toastService.success("Usuario Atualizado com sucesso!", "Atualização de usuario")
        this.formulario.reset()
      }, errorResponse=>{
        this.toastService.error("Erro ao tentar editar o usuario!", "Atualização de usuario")
        
      })
  }

  cancelar(){
   this.router.navigate(['/usuarios'])
  }

  


}

