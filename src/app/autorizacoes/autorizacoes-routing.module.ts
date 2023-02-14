import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { AdminGuardGuard } from '../guards/admin-guard.guard';
import { AuthGuard } from '../guards/auth.guard';
import { PermissoesComponent } from './permissoes/permissoes.component';

const routes: Routes = [
  {
    path: 'permissoes', component: LayouteComponent,canActivate: [AuthGuard, AdminGuardGuard], children: [

      { path: "", component: PermissoesComponent },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizacoesRoutingModule { }
