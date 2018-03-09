import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // couple of new events
  // these are custom instances of the EventEmitter method
  // which has to be imported from angular core
  // you pass in what you're expecting in the <> deal
  // also have to call it right away with ()
  // and also have to prefix this whole thing with the @Output decorator
  // which makes it, let's say, 'hearable' outside the component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
   // this.serverElements.push({
  //    type: 'server',
  //    name: this.newServerName,
  //    content: this.newServerContent
  //  });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  //  this.serverElements.push({
  //    type: 'blueprint',
  //    name: this.newServerName,
  //    content: this.newServerContent
  //  });
  }

}
