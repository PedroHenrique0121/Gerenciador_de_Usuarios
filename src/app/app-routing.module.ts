import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { AuthGuard } from './guards/auth.guard';

import { LayouteComponent } from './componentes/layoute/layoute.component';


import { RoleCadastroComponent } from './roles/role-cadastro/role-cadastro.component';
import { LoginComponent } from './usuarios/login/login.component';

import { UsuarioCadastroComponent } from './usuarios/usuario-cadastro/usuario-cadastro.component';
import { UsuariosComponent } from './usuarios/UsuariosLista/usuarios.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, },

  
  { path: "", redirectTo: "/login", pathMatch: "full" },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
