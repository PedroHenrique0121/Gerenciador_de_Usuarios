import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { LayouteComponent } from './componentes/layoute/layoute.component'
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptors/interceptor.interceptor';

import { NavComponent } from './componentes/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UsuariosComponent } from './usuarios/UsuariosLista/usuarios.component';
import { UsuarioCadastroComponent } from './usuarios/usuario-cadastro/usuario-cadastro.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { RoleCadastroComponent } from './roles/role-cadastro/role-cadastro.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComponentesModule } from './componentes/componentes.module';
import { ToastrModule } from 'ngx-toastr';
import { AutorizacoesModule } from './autorizacoes/autorizacoes.module';
import { RolesModule } from './roles/roles.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000',  options:{
  query:{
    nameRoom: "adms"
  }
} };
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    UsuariosModule,
    ComponentesModule,
    AutorizacoesModule,
    RolesModule,

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
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    ToastrModule.forRoot({
      preventDuplicates:true,
      progressBar:true,
      positionClass: "toast-bottom-center",

    })
    ,SocketIoModule.forRoot(config)
    
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    },
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
providers: [
  
]