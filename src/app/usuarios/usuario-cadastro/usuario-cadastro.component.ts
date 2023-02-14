import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from '../login/Usuario';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Socket } from 'ngx-socket-io';



@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  formulario!: FormGroup;
  hide = true;
  error = false
  usuario !: Usuario;
  constructor(private authService: AuthService,
    private router: Router,
    private usuarioService: UsuarioService,
    private toastService: ToastrService,
    private socket: Socket
   ) {
    this.usuario = new Usuario()
    
  }


  ngOnInit(): void {
    this.formulario = new FormGroup({
      login: new FormControl('', [Validators.required,]),
      nome: new FormControl('', [Validators.required,]),
      senha: new FormControl('', [Validators.required]),
    });
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

  cadastrar() {
    this.emit();
    this.usuarioService.cadastrar(this.usuario)
      .subscribe(response => {
        this.toastService.success("Novo usuario cadastrado com sucesso!", "Cadastro de usuario")
        this.formulario.reset()
      }, errorResponse=>{
        this.toastService.error("Erro ao tentar cadastrar novo usuario!", "Cadastro de usuario")
        
      })
  }

  cancelar(){
    this.router.navigateByUrl("/usuarios")
  }  

  emit (){
    this.socket.emit("evento" ,"sdg" )
  }


}

