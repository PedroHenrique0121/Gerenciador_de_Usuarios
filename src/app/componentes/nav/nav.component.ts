import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Usuario } from 'src/app/usuarios/login/Usuario';
import { AuthService } from '../../services/auth.service';

export class U {
  id!: number;
  nome!: string;
  login!: string;
  data !: Date
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {

  user!: U;
  usuarios!: U[]
  // usuarios!: string[]
  number!: number
  constructor(private router: Router,
    private authService: AuthService,
    private socket: Socket) {
      this.user= new U();
    this.usuarios = new Array<U>();
    // this.usuarios = new Array<string>()
    this.number = 0
    this.listen()
  }

  ngOnInit(): void {

  }

  redirecionarParaUsuarios() {
    this.router.navigate(['/usuarios'])
  }

  redirecionarParaPermissoes() {
    this.router.navigate(['/permissoes'])
  }

  logout() {
    this.authService.encerrarSessao();
  }

  listen() {
    this.socket.on("evento", (evento: string) => {
     
      this.user = JSON.parse(evento)
      this.user.data= new Date();
      this.usuarios.push(this.user);
     
      this.number = this.usuarios.length
    })
  }

  enviarParaNotificacoes(){
    this.router.navigate(["/usuarios/notificações"], {state:{usuarios:this.usuarios}})
    this.number=0
  }
}
