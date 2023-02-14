import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Role } from '../Role';
import { AuthService } from '../../services/auth.service';
import { RoleService } from '../../services/role.service';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-role-cadastro',
  templateUrl: './role-cadastro.component.html',
  styleUrls: ['./role-cadastro.component.css']
})
export class RoleCadastroComponent implements OnInit {

  formulario!: FormGroup;
  hide = true;
  error = false
  role !: Role;
  constructor(private authService: AuthService,
    private router: Router,
    private roleService: RoleService,
    private toastrService: ToastrService) {
    this.role = new Role()
  }


  ngOnInit(): void {
    this.formulario = new FormGroup({
      descricao: new FormControl('', [Validators.required,]),
      
    });
  }

  get descricao() {
    return this.formulario.get("descricao")
  }

  cadastrar() {
    this.roleService.cadastrar(this.role)
      .subscribe(response => {
        
       this.toastrService.success("Role cadastrada com sucesso!", "Cadastro de Papeis")
        this.formulario.reset()
      }, errorResponse=>{
        this.toastrService.error("Erro ao tentar cadastrar nova Role!", "Cadastro de Papeis")
       
      })
  }

  cancelar(){
    this.router.navigateByUrl("/papeis")
  }

  
  }


  




