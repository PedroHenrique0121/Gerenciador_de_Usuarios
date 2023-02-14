import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Usuario, UsuarioPage } from '../login/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { error } from 'console';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from 'src/app/services/socket.service';
import { io } from 'socket.io-client';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  displayedColumns: string[] = ['nome', 'login', 'senha', 'id', 'opcoes'];
  exampleDatabase!: null
  data: Usuario[] = [];

  usuario!: Usuario;
  usuarioPage!: UsuarioPage;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // io = io("http://localhost:3000",{
  //   withCredentials:true,
  //   autoConnect: true
  // })
  
  constructor(private usuarioService: UsuarioService,
    private toastService: ToastrService,
    private router: Router,
    ) {
    this.usuario = new Usuario();
   
    
  }
  
  ngOnInit() {
    this.buscarPorTodosUsuarios();
  }

  buscarPorTodosUsuarios(page?: number, size?: number) {
    this.usuarioService.retorarTodos(page ? page : 0, size ? size : 5)
      .subscribe(response => {
        this.usuarioPage = response;
        this.data = this.usuarioPage.content;
        this.isLoadingResults = false
      })
  }

  pegaMudancaPaginacao(page: PageEvent) {
    this.buscarPorTodosUsuarios(page.pageIndex, page.pageSize);
  }

  deletarUsuario(usuario: Usuario) {
    this.usuarioService.deletarUsuario(usuario)
      .subscribe(response => {
        this.buscarPorTodosUsuarios();
        this.toastService.success("Usuario deletado com sucesso!", "Deleção de usuario")
      
      
      }, error => {
        this.toastService.error("error?.error?.titulo", "Deleção de usuario")
        
      })
  }

  redirecionarParaPermissoes(usuario: Usuario){
        this.router.navigate(['/permissoes'], {state:{usuario}})
  }

  redirecionarParaEdicao(usuario:Usuario){
       this.router.navigate(['/usuarios/editar'], {state:{usuario}});
  }

  

}
