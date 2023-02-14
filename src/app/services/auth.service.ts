import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from "@auth0/angular-jwt"
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs"

import { state } from '@angular/animations';
import { LoginComponent } from '../usuarios/login/login.component';
import { MatDateFormats } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private dialog: MatDialog) { }

  encerrarSessao() {
    localStorage.removeItem("access_token");
    this.router.navigate(["/login"], {state:{ coisa: ""}});
  }

  getUserAuthenticated(){
    const token= this.obterToken();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).user_name;
      return usuario;
    }
    return null;
  }

  getRoles(){
    const token= this.obterToken();
    if(token){
      const roles = this.jwtHelper.decodeToken(token).authorities;
      return roles;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token)
     
      return !expired;
    }
    return false;
  }

  obterToken() {
    const tokenString = localStorage.getItem("access_token");
    if (tokenString) {
      const token = JSON.parse(tokenString);
      return token;
    }
    return null;
  }

  tentarLogar(userName: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set("username", userName)
      .set("password", password)
      .set("grant_type", "password");

    // const headers= {
    //   
    //   "Content-Type": "application/x-www-form-urlencoded"
    // }

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + btoa(`${environment.clientId}:${environment.clientSecret}`),
        "Content-Type": "application/x-www-form-urlencoded",
      })
    }
    // const headers = { ['content-type': 'application/x-www-form-urlencoded',]}  
    return this.httpClient.post(environment.tokenURl, params.toString(), httpOptions);
  }
}
