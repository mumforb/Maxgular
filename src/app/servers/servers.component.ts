import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // an internal template instead of an external one
  //template: `
  //  <app-server></app-server>
  //`
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  serverCreated = false;
  servers = [];

  // a method that is executed when the component mounts
  // inside angular
  // that's all. pretty neat.
  // this illustration shows how data binding works
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000)
  }

  ngOnInit() {
  }

  // using the 'on' to prefix this method is not required
  // but a nice convention that indicates it's doing something
  // when a user initiates an action
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }
  
  // this method not used anymore
  onUpdateServerName(event: Event) {
    // this weird syntax is to let typescript know
    // this is an event and make it happy
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
