import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  // typescript type declaration is optional, but possible
  serverStatus: string = 'offline';
  
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  // another way to get a value
  getServerStatus() {
    return this.serverStatus;
  }
  
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}