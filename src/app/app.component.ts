import { Component, OnInit } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SocketService } from './services/socket.service';
import * as socketIo  from 'socket.io-client';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adms';

  message = 'Waiting for messages...';
 
  constructor(private socket: Socket) {
   
   this.listen()
  }

  listen =()=>{
    this.socket.on("evento", function(event: string){
         console.log(event);
    }  )
  }



}
