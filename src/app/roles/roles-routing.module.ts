import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { AdminGuardGuard } from '../guards/admin-guard.guard';
import { AuthGuard } from '../guards/auth.guard';
import { RoleCadastroComponent } from './role-cadastro/role-cadastro.component';
import { RoleEdicaoComponent } from './role-edicao/role-edicao.component';
import { RoleListaComponent } from './role-lista/role-lista.component';

const routes: Routes = [

  {path: "papeis", component: LayouteComponent, canActivate:[AdminGuardGuard, AuthGuard], children:[
        {path: "cadastrar", component: RoleCadastroComponent},
        {path: "", component: RoleListaComponent},
        {path: "editar", component: RoleEdicaoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
