import { Location } from '@angular/common';

import { Component, OnInit, Inject, InjectionToken, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOptionSelectionChange, _MatOptionBase } from '@angular/material/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';

import { AuthorizationService } from '../../services/authorization.service';
import { RoleService } from '../../services/role.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, UsuarioPage } from '../../usuarios/login/Usuario';
import { Authorization, AuthorizationPage } from './Permissao';
import { Role } from '../../roles/Role';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';



export interface U {
  usuario: Usuario

}
export interface SnackData {
  ocorrencia: string,
  color: string

}

@Component({
  selector: 'app-pesmissoes',
  templateUrl: './permissoes.component.html',
  styleUrls: ['./permissoes.component.css']
})
export class PermissoesComponent implements OnInit {

  value !: string;
  formulario!: FormGroup;
  usuario!: Usuario;
  usuarios!: Usuario[];
  usuarioPage!: UsuarioPage;
  rolesApp!: Role[];
  authorizaocesUsuario!: Authorization[];
  disableChecks!: boolean;
  nomeUsuario!: string
  authorization!: Authorization;
  previousUrl!: string;
  isDisabled = false;



  constructor(

    private authorizationService: AuthorizationService,
    private usuarioService: UsuarioService,
    private roleService: RoleService,
    private location: Location,
    private toastr: ToastrService,
    private router: Router

  ) {
    this.usuario = new Usuario()
    this.authorization = new Authorization()
    this.usuario.authorizations = []
    this.disableChecks = true


  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required,]),

    });

    this.verificarNavegacao()
    this.focarInput()

  }


  get nome() {
    return this.formulario.get("nome");
  }


  focarInput() {
    const x = document.getElementById("nome")?.focus()
    
  }

  verificarNavegacao() {
    this.usuario = new Usuario();
    const state = this.location.getState() as U;

    if (state.usuario != undefined) {
      this.usuario = state.usuario
      console.log(this.usuario)
      this.retornarRolesCadastradas()
      this.disableChecks = false
    }
  }

  setAll(completed: boolean, source: MatCheckbox, role: Role) {
    this.authorization.idRole = role.id
    this.authorization.idUser = this.usuario.id
    if (completed == true) {
      this.cadastrarAutorizacao(this.authorization)

    } else {
      this.deletarAutorizacao(this.authorization)
    }

  }

  verificarExistenciaDePermissao(role: Role) {
    let existencia = false
   
    for (let a of this.usuario.authorizations) {
      if (a.role.descricao == role.descricao) {
        existencia = true
      }
    }
    return existencia;
  }

  // retonarPermissoesUsuario(usuario: Usuario) {
  //   return this.authorizationService.retornarAutorizacoesVinculadasUsuario(usuario.id)
  //     .subscribe(response => {
  //       this.authorizaocesUsuario = response
  //     })
  // }

  retornarRolesCadastradas() {
    this.roleService.retornarTodas()
      .subscribe(response => {
        this.rolesApp = response
      })
  }

  selecionarUsuario(usuario: Usuario) {

    this.usuario = usuario
    this.retornarRolesCadastradas()
    this.disableChecks = false
  }

  retornarUsuarioPorNome() {
    this.usuarioService.retorarPorNome(this.nomeUsuario)
      .subscribe(response => {
        this.usuarioPage = response
        this.usuarios = this.usuarioPage.content
      })
  }

  cadastrarAutorizacao(autorizacao: Authorization) {
    this.authorizationService.cadastrarAutorizacoes(autorizacao)
      .subscribe(response => {
        this.toastr.success('Autorização cadastrado com sucesso!', "Vicnculo de autorização");
      })
  }

  deletarAutorizacao(autorizacao: Authorization) {
    this.authorizationService.deletarAutorizacao(autorizacao)
      .subscribe(response => {
        this.toastr.warning('Autorização deletada com sucesso!', "Deleção de autorização");
      }, errorResponse => {
        this.toastr.warning('Não foi possivel deletar autorização!', "Deleção de autorização");
      })
  }

 



}
