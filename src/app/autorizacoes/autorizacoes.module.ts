import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizacoesRoutingModule } from './autorizacoes-routing.module';


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {ToastrModule} from "ngx-toastr"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PermissoesComponent } from './permissoes/permissoes.component';

@NgModule({
  declarations: [

    PermissoesComponent
  ],
  imports: [
    CommonModule,
    AutorizacoesRoutingModule,

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
    MatDialogModule,
    ToastrModule.forRoot()
  ]
  ,
  exports:[
    PermissoesComponent
  ]
})
export class AutorizacoesModule { }
