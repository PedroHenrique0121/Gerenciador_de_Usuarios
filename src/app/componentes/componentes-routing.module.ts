import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from '../guards/admin-guard.guard';
import { AuthGuard } from '../guards/auth.guard';
import { LayouteComponent } from './layoute/layoute.component';
import { PermissoesComponent } from '../autorizacoes/permissoes/permissoes.component';

const routes: Routes = [

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
