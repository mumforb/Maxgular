import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  // typescript type declaration is optional, but possible
  serverStatus: string = 'offline';
  
  // another way to get a value
  getServerStatus() {
    return this.serverStatus;
  }
}