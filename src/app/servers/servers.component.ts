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

}
