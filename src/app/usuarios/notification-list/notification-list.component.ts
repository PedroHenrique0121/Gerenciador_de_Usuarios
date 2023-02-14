import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { ToastrService } from 'ngx-toastr';
import { NavComponent } from 'src/app/componentes/nav/nav.component';


export class Usuario {
  id!: number;
  nome!: string;
  login!: string;
  data !: Date
}
export type U = {
  usuarios: Usuario[];
}
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  usuarios!: Usuario[];
  user!: Usuario;
  
  // usuarios!: string[]
  number!: number
  constructor(private location: Location,
    private toastService: ToastrService,
    private router: Router,
    private socket: Socket
    ) { 
          this.usuarios= new Array<Usuario>();
     
    }

  ngOnInit(): void {
    this.verficarNavegação()
    this.listen()
  }

  verficarNavegação() {
    const state = this.location.getState() as U;
    console.log(state)
    if (state.usuarios != null) {
      this.usuarios = state.usuarios
    
    }
    else {
      this.toastService.error("Não foi possivel renderizar a pagina!")
      this.router.navigate(["/usuarios"])
    }

  }

  enviarParPermissoes(usuario: Usuario) {
    this.router.navigate(['/permissoes'], {state:{usuario}})
  }

  listen() {
    this.socket.on("evento", (evento: string) => {
     
      this.user = JSON.parse(evento)
      this.user.data= new Date();
      this.usuarios.push(... [this.user]);
      console.log(this.user)
      this.number = this.usuarios.length
    })
  }

}
