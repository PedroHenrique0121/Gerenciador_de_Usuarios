import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs"
import { environment } from 'src/environments/environment';
import { Authorization, AuthorizationPage } from '../autorizacoes/permissoes/Permissao';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpCliente: HttpClient) { }

  cadastrarAutorizacoes(authorization: Authorization): Observable<Authorization> {
    return this.httpCliente.post<Authorization>(environment.apiURL + "/authorization/", authorization)
  }

  retornarTodasAutorizacoes(): Observable<AuthorizationPage> {
    return this.httpCliente.get<AuthorizationPage>(environment.apiURL + "/authorization/")
  }

  retornarAutorizacoesVinculadasUsuario(id: number): Observable<Authorization[]> {
    return this.httpCliente.get<Authorization[]>(environment.apiURL + `/authorization/user/${id}`)
  }

  deletarAutorizacao(autorizacao: Authorization){
    return this.httpCliente.delete(environment.apiURL+ `/authorization/${autorizacao.idUser}/${autorizacao.idRole}`);
  }
}
