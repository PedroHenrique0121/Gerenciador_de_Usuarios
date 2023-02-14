import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './UsuariosLista/usuarios.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { UsuarioEdicaoComponent } from './usuario-edicao/usuario-edicao.component';
import { NotificationListComponent } from './notification-list/notification-list.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioCadastroComponent,
    LoginComponent,
    UsuarioEdicaoComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
   
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports:[
    UsuariosComponent,
    UsuarioCadastroComponent,
    LoginComponent,
    NotificationListComponent
  ]
})
export class UsuariosModule { }
