import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
  
//  newServerName = '';
// newServerContent = '';
// @ViewChild() is cool, the argument is the way we select the element
// it accepts the name of a local reference
// the Type 'ElementRef' type has to be imported
// it has a property called nativeElement which contains the stuff
// from the underlying element
@ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputContent: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputContent.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
   // this.serverElements.push({
  //    type: 'server',
  //    name: this.newServerName,
  //    content: this.newServerContent
  //  });
  }

  onAddBlueprint(inputContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: inputContent.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  //  this.serverElements.push({
  //    type: 'blueprint',
  //    name: this.newServerName,
  //    content: this.newServerContent
  //  });
  }

}
