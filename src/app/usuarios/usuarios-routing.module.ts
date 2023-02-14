import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from '../guards/admin-guard.guard';
import { AuthGuard } from '../guards/auth.guard';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuariosComponent } from './UsuariosLista/usuarios.component';
import { UsuarioEdicaoComponent } from './usuario-edicao/usuario-edicao.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

const routes: Routes = [

  {
    path: 'usuarios', component: LayouteComponent, canActivate: [AuthGuard, AdminGuardGuard], children: [
      
      { path: "", component: UsuariosComponent },
      { path: "cadastrar", component: UsuarioCadastroComponent },
      { path: "editar", component: UsuarioEdicaoComponent },
      { path: "notificações", component: NotificationListComponent }
      
    ]

  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
