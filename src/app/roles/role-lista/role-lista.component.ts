import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/roles/Role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-lista',
  templateUrl: './role-lista.component.html',
  styleUrls: ['./role-lista.component.css']
})
export class RoleListaComponent implements OnInit {


  rolesApp!: Role[];

  constructor(

    private roleService: RoleService,
    private location: Location,
    private toastService: ToastrService,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.retornarRolesCadastradas()
  }

  retornarRolesCadastradas() {
    this.roleService.retornarTodas()
      .subscribe(response => {
        this.rolesApp = response
      })
  }

  excluir(role: Role) {
    this.roleService.excluir(role).
      subscribe(response => {
        this.toastService.info("PapelExcluido com sucesso!","Deleção de papeis");
        this.retornarRolesCadastradas();
      }, errrorResponse => {
        this.toastService.error("Não foi possivel excluir esse papel!", "Deleção de papel");
      })
  }
  

  enviaParaEdicao(role: Role){
    console.log(role)
    this.router.navigate(["/papeis/editar"], {state:{role}});
  }

}
