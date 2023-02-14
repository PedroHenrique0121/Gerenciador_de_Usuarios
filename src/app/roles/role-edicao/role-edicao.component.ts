import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/roles/Role';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';

export type R={
  role: Role;
}

@Component({
  selector: 'app-role-edicao',
  templateUrl: './role-edicao.component.html',
  styleUrls: ['./role-edicao.component.css']
})
export class RoleEdicaoComponent implements OnInit {

  formulario!: FormGroup;
  hide = true;
  error = false
  role !: Role;
  constructor(private authService: AuthService,
    private router: Router,
    private roleService: RoleService,
    private toastrService: ToastrService,
    private Location: Location) {
    this.role = new Role();
  }


  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl('', []),
      descricao: new FormControl('', [Validators.required,]),

    });

    this.verificaNavegacao();
    this.id?.disable
    this.darFocoInput()
  }

  darFocoInput(){
    document.getElementById("descricao")?.focus();
  }

  get id() {
    return this.formulario.get("id")
  }
  get descricao() {
    return this.formulario.get("descricao")
  }

  verificaNavegacao() {
    this.role = new Role();
    const state = this.Location.getState() as R;
    
    if (state.role!= null) {
      this.role = state.role;
    } else {
      this.router.navigate(["/papeis"]);
      this.toastrService.error("Não foi pssivel carregar esta pagina!", "Erro");
    }
  }

  editar() {
    this.roleService.editar(this.role)
      .subscribe(response => {
        this.toastrService.info("Role editada com sucesso!", "Cadastro de Papeis")
        this.formulario.reset()
      }, errorResponse => {
        this.toastrService.error("Erro ao tentar editar o papel!", "Cadastro de Papeis")

      })
  }

  cancelar() {
    this.router.navigateByUrl("/papeis")
  }



}
