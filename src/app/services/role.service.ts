import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { environment } from 'src/environments/environment';
import { Role } from '../roles/Role';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpCliente: HttpClient) { }


  retornarTodas() : Observable<Role[]>{
    return this.httpCliente.get<Role[]>(environment.apiURL+"/roles");
  }

  cadastrar(role: Role) : Observable<Role>{
    return this.httpCliente.post<Role>(environment.apiURL+"/roles", role);
    
  }

  editar( role: Role): Observable<Role>{
    return this.httpCliente.put<Role>(environment.apiURL+ `/roles/${role.id}`, role);
  }

  excluir(role:Role): Observable<any>{
    return  this.httpCliente.delete(environment.apiURL+ `/roles/${role.id}`);
  }

}
