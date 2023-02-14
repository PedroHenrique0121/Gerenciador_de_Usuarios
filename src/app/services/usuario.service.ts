import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario, UsuarioPage } from '../usuarios/login/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 
  constructor(private httpClient: HttpClient) {

  }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(environment.apiURL + `/users/cadastrar`, usuario)
  }

  retorarPorNome(nome: string): Observable<UsuarioPage> {
    return this.httpClient.get<UsuarioPage>(environment.apiURL +`/users/pagination/${nome}`);
  }

  retorarTodos(page?: number, size?:number): Observable<UsuarioPage> {
    return this.httpClient.get<UsuarioPage>(environment.apiURL +`/users?size=${size}&page=${page}`);
  }

  deletarUsuario(usuario:Usuario) {
    return this.httpClient.delete(environment.apiURL + `/users/${usuario.id}`)
  }

  editar(usuario: Usuario): Observable<Usuario>{
   return this.httpClient.put<Usuario>(environment.apiURL + `/users/editar/${usuario.id}`, usuario);
  }

  
}
